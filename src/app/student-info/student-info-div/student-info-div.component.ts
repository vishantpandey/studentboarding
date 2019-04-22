import { Component, OnInit, Input } from '@angular/core';
import { Student, StudentsDetailsService } from 'src/app/services/students-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-info-div',
  templateUrl: './student-info-div.component.html',
  styleUrls: ['./student-info-div.component.css']
})
export class StudentInfoDivComponent implements OnInit {

@Input() student;
@Input() studentIndex;
  constructor(public router:Router,public studentDetailService:StudentsDetailsService) { }

  ngOnInit() {
  }

  editClick(event: Event) {
    console.log( event);
    this.router.navigate(['OnBoardingformEdit',this.studentIndex])
  }

  viewClick(event: Event) {
    console.log( event);
    this.router.navigate(['OnBoardingformView',this.studentIndex])
  }

  deleteClick(event: Event) {

    if(confirm('Are you sure you want to delete?')){
    console.log( event);
    this.studentDetailService.deleteStudent(this.studentIndex)
    //this.router.navigate(['OnBoardingformView',this.studentIndex])
    }
  }

  

}
