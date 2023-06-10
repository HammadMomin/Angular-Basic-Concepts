import { Component } from '@angular/core';
import {  NgForm} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {UserdataService} from './Services/userdata.service';
import {ApiServiceService} from './Services/api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userdata:UserdataService , private userData : ApiServiceService ){
    console.warn("userdata" , userdata.users())
    this.userss = userdata.users();

    this.userData.users20()
        .subscribe((data)=>{
          console.warn("data" , data);
          this.allusers =data
        });
  }
  allusers :any;

  title = 'Learning Angular'; //

  title0 ='Interpolation'//
  tsfile =' app.component.ts'

  title00 = 'Funtions In Angular';
  getName(name:string){
    alert(name)
  }
  get2Names(name:any, secondName:any)
  {
    alert(name);
    alert(secondName)
  }

  title000 = 'Events | Blur | Keyup, | Mouseover' // 
  getData(val:string){
    console.warn("Function Called")
  }
  getData1(val:any){
    console.warn(val)
  }


  count = 0; //
  counter(type:any){
    type==='add' ? this.count++ : this.count--;
  }
  Resetcount(){
    this.count = 0;
  }

  title02 = 'Property Binding'; //
  name = 'hammad';
  disable = false;  // ==> This Is Where We Make Use of property binding Because interpolation can treat only 
                    // string and interger value while for boolean we use property binding method 

  title2= 'If and Else Condition';//
  show= 'yes';

  title3 = 'Multiple Conditions / Else-If'//
  color='violet';

  title4 = 'Switch Case';//
  color2 = 'green';

  title5 = 'For Loop / *ngFor';//
  user = ['hammad' , 'anas' , 'arshad' , 'kasim' , 'sakib' , 'raiyan'];
  userDetails = [
    {name:'hammad' , origin:'india' , phoneno: '8888', email: 'hammad@gmail.com'},
    {name:'anas' , origin:'United states' , phoneno: '8888', email: 'anas@gmail.com'},
    {name:'arshad' , origin:'india' , phoneno: '8888', email: 'arshad@gmail.com'},
    {name:'raiyan' , origin:'india' , phoneno: '8888', email: 'raiyan@gmail.com'}
  ]

    title6 ='Nested Loop' //
    users= [
      {name: 'hammad' , phone: '987654321' , socialAccounts : ['faebook' , 'instagram']},
      {name: 'anas' , phone: '987654321' , socialAccounts : ['telegram' , 'whatsapp']},
      {name: 'sakib' , phone: '987654321' , socialAccounts : ['twitter' , 'youtube']},
      {name: 'ahmed' , phone: '987654321' , socialAccounts : ['snapchat' , 'botim']}
    ]

    title7 = 'Style Binding | Dynamic Style' //
    text = 'Sample Text (Interploated)';
    colorstyle ='black'
    bgcolor ='yellow'

    updateColor(){
      this.colorstyle = 'white'
      this.bgcolor = 'black'
    }
    resetColor(){
      this.colorstyle ='black'
      this.bgcolor ='yellow'
    }


    title8 ='Headers in Angular'// 

    title9 = 'Basic Form in Angular'//
    formdata : any = {};

    getformData(data:NgForm){
      console.warn(data)
      this.formdata = data ;
    }

    title10 = 'Toggle Element | Hide and Show tag'//
    
    displaydata = false;
    toggle(){
      this.displaydata = !this.displaydata
    }

    title11 = 'Angular Bootstrap' //

    title12 = 'Angular Material UI'//
    hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }


  title13 ='To-do List In Angular'//
  list:any[]=[];
  addTodo(item:string){

    this.list.push({id:this.list.length , name: item})
    console.warn(this.list)
  }
  removeTodo(id:number){
    console.warn(id)
    this.list = this.list.filter(item=>item.id!==id)
  }

  title14 = 'Send Data From Parent To Child Component'//   
  data: any = 10;

  updateChild(){
    this.data = Math.floor(Math.random()*10);
  }
  resetChild(){
    this.data = 10
  }

  title15 = 'Reusable Component'//
  userDetails1=[
    {name:'Anil',email:'anil@test.com'},
    {name:'Sam',email:'sam@test.com'},
    {name:'Peter',email:'peter@test.com'},
    {name:'Bruce',email:'bruce@test.com'},
    {name:'Tony',email:'tony@test.com'},

  ]

  title16 = 'Send data From Child To Parent' // 
  data1 ='x'
  updateData(item:string){  //Now i want to access this fucntion into child2 component and then send data from child to parent
    console.warn(item)
    this.data1 = item
  }

  title17 = 'Two Way Binding' // 
  namebinding : any; 

  title18 = 'Template Reference Variable' //
  callFunc(item:HTMLInputElement){
    console.warn(item)
  }

  title19 = 'Pipes in Angular' // 
  text1 = 'Sample Text to Show Pipes Effect';

  capText(item:string){
    return item.toLowerCase();
  }

  title20 = 'Advance Pipes Slice | JSON | Number | Currency'//
  text2 = 'Angular Advance Pipes Sample Text'

  user2 = {
    name: 'hammadmomin',
    phone : '9876543210'
  }

  title21 = 'Make Custom Pipes' //
  
  title22 :any = 'Angular Forms Introduction' //

  title23 = 'Template-Driven Forms';//
  userLogin(item:any){
    console.warn(item)
  }

  title24 = 'Template-Driven Forms Validations';//

  title25 = 'Reactive Form'//
  
  title26 = 'Directives | Making Custom Directive' // 

  title27='Basic Routing'//

  title28 = 'Dynamic Routing'//

  title29 ='Service In Angular'//
  userss:any;

  title30 = 'GET API Call'//

  title31 = 'POST API To Json-Server'//

}