import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ApiServiceService} from '../../Services/api-service.service';

@Component({
  selector: 'app-add-user-post-api',
  templateUrl: './add-user-post-api.component.html',
  styleUrls: ['./add-user-post-api.component.css']
})
export class AddUserPOSTAPIComponent{

  constructor(private postUser : ApiServiceService){ }


  title = 'Form To Add User to API'//
  addUserForm = new FormGroup({
    name : new FormControl('' , [Validators.required]),
    email : new FormControl('' , [Validators.required]),
    phone : new FormControl('' , [Validators.required]),
    gender : new FormControl('' , [Validators.required]),
    password : new FormControl('' , [Validators.required , Validators.minLength(6), Validators.maxLength(12)
    ])
  })
  addUser(data:any){
    this.postUser.saveUsers(data).subscribe((data) => {
    
    console.warn("posted user" , data);
  })
  }
}
