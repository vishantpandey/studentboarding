import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { OnBoardingAppModule } from './on-boarding-app/on-boarding-app.module';
import { OnBoardingFormModule } from './on-boarding-form/on-boarding-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {ToolbarModule} from 'primeng/toolbar';
import { ListStudentsModule } from './list-students/list-students.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule
    ,OnBoardingAppModule
    ,OnBoardingFormModule
    ,ListStudentsModule, BrowserAnimationsModule,ButtonModule,InputTextModule,TableModule,DialogModule,ToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
