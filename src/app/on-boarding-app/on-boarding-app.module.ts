import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnBoardingAppScreenComponent } from './on-boarding-app-screen/on-boarding-app-screen.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import {SharedModule} from 'primeng/primeng';
import { OnBoardingFormModule } from '../on-boarding-form/on-boarding-form.module';
import { ListStudentsModule } from '../list-students/list-students.module';

@NgModule({
  declarations: [OnBoardingAppScreenComponent],
  imports: [
    CommonModule
    ,InputTextModule
    ,ButtonModule
    ,TableModule
    ,DialogModule
    ,TabViewModule
    ,ToolbarModule
    ,SharedModule
    ,OnBoardingFormModule
    ,ListStudentsModule
  ]
  ,exports:[
    OnBoardingAppScreenComponent,
    FormsModule                       //*ngFor purpose
  ],
})
export class OnBoardingAppModule { }
