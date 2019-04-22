import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Student {
  id:number;
  name: string;
  category: string;
  domicile: boolean;
  birthCertificate: boolean;
  marksheet: boolean;
  policeClearnce: boolean;
  passport: boolean;
  declaration: boolean;
  dob: Date;
  fatherName: string;
  motherName: string;
}

@Injectable({
  providedIn: 'root'
})
export class StudentsDetailsService {

  student$: BehaviorSubject<Student[]> = new BehaviorSubject([]);
  students:Student[];

  constructor(private http: HttpClient) { }

  getStudents() {
    const url = '/assets/student-details.json';

    return this.http.get<Student[]>(url);
  }

  fetchStudents() {
    const url = '/assets/student-details.json';
    if (localStorage.getItem("Students") === null) {

    this.http.get<Student[]>(url).subscribe(data => {
      this.student$.next(data);
      localStorage.setItem("Students", JSON.stringify(data));
    });
    
  }
  else{
  this.students=  JSON.parse(localStorage.getItem("Students"))
  this.student$.next(this.students);
  }

  }

  fetchStudentsByCategory(category:string) {
    const url = '/assets/student-details.json';
    if (localStorage.getItem("Students") === null) {

    this.http.get<Student[]>(url).pipe( map((students: Student[] )=> students.filter(std => std.category === category))).subscribe(data => {
      this.student$.next(data);
      localStorage.setItem("Students", JSON.stringify(data));
    });
    
  }
  else{
  this.students=  JSON.parse(localStorage.getItem("Students"))
  let filteredStudent=this.students.filter(
    student => student.category === category)
  this.student$.next(filteredStudent);
  }

  }

  fetchStudentsByName(name:string) {
    const url = '/assets/student-details.json';
    if (localStorage.getItem("Students") === null) {

    this.http.get<Student[]>(url).pipe( map((students: Student[] )=> students.filter(std => std.name === name))).subscribe(data => {
      this.student$.next(data);
      localStorage.setItem("Students", JSON.stringify(data));
    });
    
  }
  else{
  this.students=  JSON.parse(localStorage.getItem("Students"))
  let filteredStudent=this.students.filter(
    student => student.name === name)
  this.student$.next(filteredStudent);
  }

  this.student$.pipe(
    // (+) before `id` turns the string into a number
   // map((students: Student[]) => students.find(student => student.id === +id)),
    map((students: Student[] )=> students.filter(std => std.name === name))
   
  ).subscribe(res => this.student$.next(res));

  }

  addNewStudent(student: Student) {
    const currentData = this.student$.getValue();
    this.students=  JSON.parse(localStorage.getItem("Students"))
    student.id= this.students.length+1;
    const updatedData = [...currentData, student];

    this.student$.next(updatedData);

   
    this.students.push(student);

   // if (localStorage.getItem("Students") === null) {
      localStorage.setItem("Students", JSON.stringify(this.students));
   // }
  }

  deleteStudent(index: number) {
    debugger;
    const currentData = this.student$.getValue();

    currentData.splice(index-1, 1);
    //student.id= currentData.length+1;
  //  const updatedData = [...currentData, student];

    this.student$.next(currentData);

   // if (localStorage.getItem("Students") === null) {
      localStorage.setItem("Students", JSON.stringify(currentData));
   // }
  }


  getStudent(id: number ) : Observable<Student> {
    return this.student$.pipe(
      // (+) before `id` turns the string into a number
     // map((students: Student[]) => students.find(student => student.id === +id)),
      map((students: Student[] )=> students.find(std => std.id === +id))
     
    );
    //.subscribe(res => console.log(res));
   // .subscribe(res => res);

  //  return this.student$
  //   .subscribe(data => {
  //     //data.find(student => student.id === +id)
  //     // map((students: Student[]) => students.find(student => student.id === +id))
  //     
  //     console.log(data.find(function(ele){return ele.id===1}));
  //     data.find(function(ele){return ele.id===1})
  //   });
  }

  updateStudent(student: Student ) {
    debugger;
    return this.student$.pipe(
      // (+) before `id` turns the string into a number
     // map((students: Student[]) => students.find(student => student.id === +id)),
      map((students: Student[] )=> students.find(std => std.id === +student.id))
     
    ).subscribe(data=>{
      data.name=student.name
      data.category=student.category
      data.domicile=student.domicile
      data.birthCertificate=student.birthCertificate
      data.marksheet=student.marksheet
      data.passport=student.passport
      data.policeClearnce=student.policeClearnce
      data.declaration=student.declaration
      data.dob=student.dob
      data.fatherName=student.fatherName
      data.motherName=student.motherName
debugger;
      localStorage.setItem("Students", JSON.stringify( this.student$.getValue()));
    }
    );
    
  }
}
