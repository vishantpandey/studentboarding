import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface LoginUser{
  userName:string;
  password:string;
 

}

@Injectable({
  providedIn: 'root'
})
export class LoginUserDetailsService {
  user$: BehaviorSubject<LoginUser[]> = new BehaviorSubject([]);
users:LoginUser[];
  constructor(private http:HttpClient) { }
  getUsers(){
    const url='/assets/login-users.json';
    return this.http.get<LoginUser[]>(url)
  }

  
  fetchStudents() {
    const url = '/assets/student-details.json';
    if (localStorage.getItem("Administrator") === null) {

    this.http.get<LoginUser[]>(url).subscribe(data => {
      this.user$.next(data);
      localStorage.setItem("Administrator", JSON.stringify(data));
    });
    
  }
  else{
  this.users=  JSON.parse(localStorage.getItem("Administrator"))
  this.user$.next(this.users);
  }

  }


  getAdmin(userName: string, password:string ) : Observable<LoginUser> {
    return this.user$.pipe(
      // (+) before `id` turns the string into a number
     // map((students: Student[]) => students.find(student => student.id === +id)),
      map((users: LoginUser[] )=> users.find(usr => (usr.userName === userName && usr.password === password)))
     
    );
    //.subscribe(res => console.log(res));
   // .subscribe(res => res);

  }

}
