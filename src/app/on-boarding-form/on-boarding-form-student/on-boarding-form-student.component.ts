import { Component, OnInit, Input } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentsDetailsService, Student } from 'src/app/services/students-details.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding-form-student',
  templateUrl: './on-boarding-form-student.component.html',
  styleUrls: ['./on-boarding-form-student.component.css'],
  providers: [MessageService]
})
export class OnBoardingFormStudentComponent implements OnInit {

  categories: SelectItem[];
  //selectedCategory:string='All';
  //dobstr:string;
  //selectedValues:string[];
  userform: FormGroup;
student:Student;
formName:string;
    submitted: boolean;
    v: boolean;
    index:number;
    @Input() studentIndex:number;
    @Input() isView:boolean;
    @Input() isEdit:boolean;

  constructor(private fb: FormBuilder,private messageService: MessageService,public studentsDetailService:StudentsDetailsService,public router:Router) { 
   
  }


  ngOnInit() {
    this.v=true;
this.formName="Onboarding Form"
    this.categories = [];
  this.categories.push({label:'international', value:'international'});
  this.categories.push({label:'domestic', value:'domestic'});
//this.studentIndex=1;
  console.log("this.isView"+this.isView);
  console.log("this.isEdit"+this.isEdit);
  this.index=this.studentIndex;

  // Object.keys(this.student).forEach(function(k){
  //       console.log(k + ' - ' +this.student[k]);
  //   }); 
//   for ( let item in this.student) {
//     console.log(item); // "4", "5", "6"
//  }
// json.Student.forEach(element => {
//   console.log(element);
  
// });
   //console.log(this.student[0]);
  // console.log(this.student.name);
  
  // if(this.studentIndex != null && this.studentIndex != undefined){
  //   this.student= this.studentsDetailService.getStudent(this.studentIndex);
  //   console.log("this.student");
  //   console.log(this.student);

  //   // this.userform.setValue({
      
  //   //   name: this.student.name,
  //   //   category: this.student.category
  //   // })
  // }
  // else{
    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'category': new FormControl('domestic', Validators.required),
     // 'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)])),
      'domicile': new FormControl(false, Validators.required),
      'birthCertificate': new FormControl(false,  Validators.required),
      'marksheet': new FormControl(false, Validators.required),
      'policeClearnce': new FormControl(false, Validators.required),
      'passport': new FormControl(false, Validators.required),
      'declaration': new FormControl(false, Validators.required),
      'dob': new FormControl('', Validators.required),
      'fatherName': new FormControl('', Validators.required),
      'motherName': new FormControl('', Validators.required),
      'id': new FormControl(''),

  });



if(this.studentIndex !=undefined && !isNaN(this.studentIndex) ){
  
  this.studentsDetailService.getStudent(this.studentIndex).subscribe(res =>{


    if(this.studentIndex !=undefined && !isNaN(this.studentIndex) ){
  this.userform.get('name').setValue(res.name);
  this.userform.get('category').setValue(res.category);
  this.userform.get('domicile').setValue(res.domicile);
  this.userform.get('birthCertificate').setValue(res.birthCertificate);
  this.userform.get('marksheet').setValue(res.marksheet);
  this.userform.get('policeClearnce').setValue(res.policeClearnce);
  this.userform.get('passport').setValue(res.passport);
  this.userform.get('declaration').setValue(res.declaration);
 // this.userform.get('dob').setValue(((res.dob.getMonth() + 1) + '/' + res.dob.getDate() + '/' +  res.dob.getFullYear()).toString());
  this.userform.get('fatherName').setValue(res.fatherName);
  this.userform.get('motherName').setValue(res.motherName);
  console.log(res.dob);
  let datedata= new Date(res.dob);
  this.userform.get('dob').setValue((datedata.getMonth() + 1) + '/' + datedata.getDate() + '/' +  datedata.getFullYear());

  if(res.id != undefined && res.id != null){
  this.userform.get('id').setValue(res.id);
  }
  

  if(this.isView){
    this.userform.disable();
    this.formName="Onboarding Form (View)"
  }
  
  if(this.isEdit){
    this.formName="Onboarding Form (Edit)"
  }
    }
 
 });

}


}
  //}

  get f() { return this.userform.controls; }

  onSubmit(value) {
    this.submitted = true;
    console.log(this.userform.value); 
    console.log(value);

    console.log("value: "+this.userform.controls['category'].value);
    
    if(this.isEdit){
      
      this.studentsDetailService.updateStudent(value);

    }else{
    this.studentsDetailService.addNewStudent(value);
    this.userform.reset();
    }
    this.messageService.add({severity:'info', summary:'Success', detail:'Form Submitted'});
    this.router.navigate(['OnBoarding'])
}

get diagnostic() { return JSON.stringify(this.userform.value); }


}
