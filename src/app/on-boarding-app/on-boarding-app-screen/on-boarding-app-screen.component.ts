import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding-app-screen',
  templateUrl: './on-boarding-app-screen.component.html',
  styleUrls: ['./on-boarding-app-screen.component.css']
})
export class OnBoardingAppScreenComponent implements OnInit {

  studentIndex:number;
  tabIndex:number;
  isEdit:boolean;
  isView:boolean;
  constructor(public activatedRoute : ActivatedRoute,public router:Router) { }

  ngOnInit() {
   // let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    this.activatedRoute.paramMap.subscribe((params:ParamMap) => {
      let id = parseInt(params.get('id'));
      let tabId= parseInt(params.get('tabId'));
      this.studentIndex=id;
      this.tabIndex=tabId;
    })
  
    console.log(this.studentIndex);
    console.log("tabid: " +this.tabIndex);

   this.isEdit= this.router.url.includes("OnBoardingformEdit");
   this.isView= this.router.url.includes("OnBoardingformView");
    
  }

  onTabChange(event) {
    //this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    console.log("URL:" +this.router.url);
    if(event.index==1 && ( this.router.url.includes("OnBoardingformEdit") || this.router.url.includes("OnBoardingformView"))){
      console.log("index:" +event.index);
      
      let selectedId=event.index;
      this.router.navigate(['OnBoarding',{tabId:selectedId}])
    }
    
}

isStudentListTabSelected (): Boolean{
  return this.tabIndex==1   ;  //1 for listing student tab
      }

}
