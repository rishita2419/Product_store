import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  headers = new HttpHeaders()
              .set('Content-type','application/json')

  getMethod(){
    return this.http.get("http://localhost:3100/products")
  }

  getLoginMethod(params:HttpParams = new HttpParams()){
    return this.http.get("http://localhost:3000/users", { 'params':params, 'headers':this.headers })
  }

  postMethod(obj:any){
    return this.http.post("http://localhost:3000/users",obj,{headers: this.headers})
  }
}
