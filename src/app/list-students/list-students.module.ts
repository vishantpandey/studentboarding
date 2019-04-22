import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentsInfoComponent } from './list-students-info/list-students-info.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import {SharedModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { StudentInfoModule } from '../student-info/student-info.module';

@NgModule({
  declarations: [ListStudentsInfoComponent],
  imports: [
    CommonModule
    ,InputTextModule
    ,ButtonModule
    ,TableModule
    ,DialogModule
    ,TabViewModule
    ,ToolbarModule
    ,SharedModule
    ,DropdownModule
    ,HttpClientModule
    ,StudentInfoModule
    ,FormsModule
  ]
  ,exports:[
    ListStudentsInfoComponent
    ,FormsModule                       //*ngFor purpose
  ]
})
export class ListStudentsModule { }
