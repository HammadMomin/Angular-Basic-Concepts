import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseurl = "http://localhost:3000/users"

  constructor(private http:HttpClient) {}
  users20(){
    return this.http.get(this.baseurl);
  }
  saveUsers(data:any){
    return this.http.post(this.baseurl,data);
  }
   
}
