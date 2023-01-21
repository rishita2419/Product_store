import { Component, OnInit } from '@angular/core';
import { LogInOutService } from '../service/log-in-out.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private loginService:LogInOutService) { }

  ngOnInit(): void {
  }

  userDetails:any;

  loginSuccess(){


    const resp = this.loginService.getUserResponse();
    if(resp!=null){
      this.userDetails =resp;
      console.log("details = ",this.userDetails)
    }
  }
}
