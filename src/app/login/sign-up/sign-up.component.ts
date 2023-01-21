import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { passwordMismatch } from 'src/app/shared/validators/custom.validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private fb:FormBuilder,private _http:HttpClient,private _service:HttpService,private _route:Router) { }

  registerForm !:FormGroup;

  ngOnInit(): void {
    this.form();
  }
  
  form(){
      this.registerForm = this.fb.group({
        'email' : ['',[Validators.required]],
        'name' : [''],
        'mobile' : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
        'password' : ['',[Validators.required]],
        'confirmPassword' : ['',[Validators.required]],
      },
        {Validators:passwordMismatch})
  }


  @Output() actionEmit = new EventEmitter<any>;

  emitAction(){
    this.actionEmit.emit('signIn')
  }

  registerFormData(){
    console.log(this.registerForm.value);
  }

  signUpData(){
    const data = this.registerForm.value;
    this._service.postMethod(data).subscribe((res:any) => {
        console.log("resp",res)
          this.emitAction();
    })  
  }

}
