import { HttpClient, HttpParams } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/service/http.service';
import { LogInOutService } from '../service/log-in-out.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private _service:HttpService,private _LogService:LogInOutService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup(  {
      'email' : new FormControl('',Validators.required),
      'password' : new FormControl('',Validators.required)
    } )
  }

  loginForm!:FormGroup

  @Output() actionEmit = new EventEmitter<any>;

  emitAction(){
    this.actionEmit.emit('signUp')
  }
  
  emitActionLogin(){
    this.actionEmit.emit('login')
  }


  formData(){
    const params = new HttpParams()
                    .set('email',this.loginForm.value.email)
                    .set('password',this.loginForm.value.password)

      console.log(this.loginForm.value)

   this._service.getLoginMethod(params).subscribe((res:any) => {  

      console.log("req => ",res.length,res)
          if(Array.isArray(res) && res.length > 0){
            let response = res[0];
                  response['Token'] = "SachinSonawane";
              this._LogService.setUserResponse(response) 
                this.emitActionLogin()
                this.loginForm.reset();
          }
          
    })         
  }

}
