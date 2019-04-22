import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnBoardingAppScreenComponent } from './on-boarding-app/on-boarding-app-screen/on-boarding-app-screen.component';
import { OnBoardingFormStudentComponent } from './on-boarding-form/on-boarding-form-student/on-boarding-form-student.component';
import { LoginUserComponent } from './login/login-user/login-user.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginUserComponent,
    canActivate: []
  },
  {
    path: 'OnBoarding',
    component: OnBoardingAppScreenComponent,
    canActivate: []
  },
  {
    path: 'OnBoardingformView/:id',
    component: OnBoardingAppScreenComponent,
    canActivate: []
  },
  {
    path: 'OnBoardingformEdit/:id',
    component: OnBoardingAppScreenComponent,
    canActivate: []
  },
  {
    path: 'OnBoardingform',
    component: OnBoardingFormStudentComponent,
    canActivate: []
  },
  {path:'', 
   redirectTo :'login'
   , pathMatch:'full'
  },
  {path:'*', 
  redirectTo :'login', 
  pathMatch:'full'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
