import { Component, OnInit } from '@angular/core';
import { StudentsDetailsService } from 'src/app/services/students-details.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-list-students-info',
  templateUrl: './list-students-info.component.html',
  styleUrls: ['./list-students-info.component.css']
})
export class ListStudentsInfoComponent implements OnInit {

  studentType: SelectItem[];
  selectedStudentType:SelectItem;
  searchValue:string;

  constructor(public studentsDetailService:StudentsDetailsService) { }

  ngOnInit() {
    this.studentType = [];
    this.studentType.push({label:'All', value:'All'});
    this.studentType.push({label:'International', value:'international'});
    this.studentType.push({label:'Domestic', value:'domestic'});

    if(this.selectedStudentType == undefined || this.selectedStudentType == null){
      this.selectedStudentType=this.studentType[0];
    }
    this.studentsDetailService.fetchStudents();
  }

  onTypeChange(event) {
    debugger;
    console.log(event.value.value);

    this.searchValue=""; 

    if(event.value.value !='All'){
      this.studentsDetailService.fetchStudentsByCategory(event.value.value);
    }
    else{
      this.studentsDetailService.fetchStudents();
    }
    
    //this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    // console.log("URL:" +this.router.url);
    // if(event.index==1 && ( this.router.url.includes("OnBoardingformEdit") || this.router.url.includes("OnBoardingformView"))){
    //   console.log("index:" +event.index);
      
    //   // let selectedId=event.index;
    //   // this.router.navigate(['OnBoarding',{tabId:selectedId}])
    // }
  }

  searchStudent(){

    if(this.searchValue != undefined && this.searchValue != null && this.searchValue.trim() !=""){
      this.studentsDetailService.fetchStudentsByName(this.searchValue.trim());

    }

  }
}
