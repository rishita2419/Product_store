import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogInOutService {

  constructor() { }

  setUserResponse(data:any){

    if (data) {
      let userResponse = JSON.stringify(data);

      sessionStorage.setItem('user-response',userResponse);
      console.log("set",userResponse) 
    } 
  }

  getUserResponse(){  
     var data = sessionStorage.getItem('user-response');
     if(data){

      data = JSON.parse(data);
      console.log("get",data)
      return data;
     }
     return null;
  }

  clearUserResponse(){
    sessionStorage.removeItem('user-response')
    sessionStorage.clear()
  }
}
