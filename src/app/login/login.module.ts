import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginUserComponent } from './login-user/login-user.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { OnBoardingAppModule } from '../on-boarding-app/on-boarding-app.module';
import {InputTextModule} from 'primeng/inputtext';
//import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { PanelModule } from 'primeng/components/panel/panel';
import { ButtonModule } from 'primeng/components/button/button';
import { RadioButtonModule } from 'primeng/components/radioButton/radioButton';

@NgModule({
  declarations: [LoginUserComponent],
  imports: [
    CommonModule
    ,ReactiveFormsModule
    ,OnBoardingAppModule
    ,ButtonModule,InputTextModule,TableModule,DialogModule
  ],
  exports:[LoginUserComponent]
})
export class LoginModule { }
