import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LogInOutService } from 'src/app/login/service/log-in-out.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService:LogInOutService,private _router:Router) { }

  ngOnInit(): void {
    this.loggedUser();

  }

  @ViewChild('btnClose')btnClose!:ElementRef ;

  actionType:string = "signIn"
  userLoggedIn:boolean= false;
  userDetails:any;


  changeActionEmit1(action:string){
        if(action == "login") {
          this.loginSuccess();
        } 
        else
        {
          this.actionType = action
        }
  }

  changeActionEmit2(action:any){
    if(action){
      this.actionType = action
    }
  }

    clear(){
      this.loginService.clearUserResponse();
      // localStorage.clear();
      this.userLoggedIn = false;
      this._router.navigate(['']);
    }

    loginSuccess(){
        this.userLoggedIn = true;

        const resp = this.loginService.getUserResponse();
        if(resp!=null){
          this.userDetails =resp;
          // console.log("details = ",this.userDetails)
        }
        this.btnClose.nativeElement.click();

    }

    loggedUser(){

      const resp = this.loginService.getUserResponse();
      if(resp!=null){
        this.userDetails =resp;
      this.userLoggedIn = true;
      }
  }

  showUser(){

  }
}
