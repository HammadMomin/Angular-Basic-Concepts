import { Component } from '@angular/core';
import { FormGroup, FormControl ,Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  title25 = 'Reactive Forms'//
  loginForm = new FormGroup({
    name : new FormControl(''),
    password : new FormControl('')
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }


  loginForm2 = new FormGroup({
    email : new FormControl('' , [Validators.required , Validators.email]),
    password : new FormControl('' , [Validators.required , Validators.minLength(6), Validators.maxLength(12) ])
  })
  loginUser2(){
    console.warn(this.loginForm2)
  }
  get email(){
    return this.loginForm2.get('email')
  }
  get password(){
    return this.loginForm2.get('password')
  }

}
