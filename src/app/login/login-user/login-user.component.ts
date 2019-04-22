import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup  } from '@angular/forms';  
import { Router, ActivatedRoute } from '@angular/router';
import { LoginUserDetailsService } from 'src/app/services/login-user-details.service';


@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

loginUsersFromService=[];
  loginForm: FormGroup;
  isSubmitted:boolean=false;
  loading:boolean=false;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,
    private router: Router, private loginUserService:LoginUserDetailsService) {
      this.loginUserService.getUsers().subscribe(data =>{
        this.loginUsersFromService=data;
      });
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['',[Validators.required]]
    });
    
       // get return url from route parameters or default to '/'
       this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted = true;
   
    if(this.loginForm.invalid ){
      return;
    }
    else{
      let isroute:boolean
      this.loginUserService.getAdmin(this.loginForm.value.username,this.loginForm.value.password).subscribe(res => {
        if(res){
          isroute=true
          
        }
      });

  
      for(var i=0;i<this.loginUsersFromService.length ;i++){
        if(this.loginUsersFromService[i].username==this.loginForm.value.userName && this.loginUsersFromService[i].password==this.loginForm.value.password){
    
          isroute=true;
          break;
        }
        

      }
      if(isroute){
        this.router.navigateByUrl('/OnBoarding');
      }
     console.log( this.loginUsersFromService);
     
    }

    

    // this.authenticationService.login(this.f.username.value, this.f.password.value)
    // .pipe(first())
    // .subscribe(
    //     data => {
    //         this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //         this.alertService.error(error);
    //         this.loading = false;
    //     });
    

  }


}
