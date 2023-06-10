import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { UserComponent } from './Components/user/user.component';
import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { AppComponent } from './app.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';

const routes: Routes = [
  
  {
    path: 'home' , component : HomeComponent
  },
  {
    component :AboutusComponent ,
    path:'about',
    children:[
      {path:'company' , component: AboutCompanyComponent},
      {path:'me' , component: AboutMeComponent}
    ]
  },
  {
    path: 'contact' , component : ContactusComponent
  },
  {
    path : 'user/:id' , component :UserComponent
  },
  {
    path :'**' , component : ErrorPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
