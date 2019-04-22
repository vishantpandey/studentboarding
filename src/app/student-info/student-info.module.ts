import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoDivComponent } from './student-info-div/student-info-div.component';
import { CardModule, ButtonModule } from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [StudentInfoDivComponent],
  imports: [
    CommonModule
    ,CardModule
    ,ButtonModule
    ,TableModule
  ],
  exports:[
    StudentInfoDivComponent
  ]
})
export class StudentInfoModule { }
