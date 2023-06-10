import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return[
      {name:'hammad' , age:'21' , email:'hammad@test.com'},
      {name:'anas' , age:'24' , email:'anas@test.com'},
      {name:'ahmed' , age:'20' , email:'ahmed@test.com'}
    ]
  }
}
