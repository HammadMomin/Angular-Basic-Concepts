import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import{FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatBadgeModule} from '@angular/material/badge';
import { ChildComponent } from './Components/child/child.component';
import { Child2Component } from './Components/child2/child2.component';
import { ConvertUsdInrPipe } from './Pipes/convert-usd-inr.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { RedElementDirective } from './Directives/red-element.directive';
import { HomeComponent } from './Components/home/home.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { UserComponent } from './Components/user/user.component';

import { ErrorPageComponent } from './Components/error-page/error-page.component';
import { AboutCompanyComponent } from './Components/about-company/about-company.component';
import { AboutMeComponent } from './Components/about-me/about-me.component';
import { FooterComponent } from './Components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { AddUserPOSTAPIComponent } from './Components/add-user-post-api/add-user-post-api.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChildComponent,
    Child2Component,
    ConvertUsdInrPipe,
    ReactiveFormComponent,
    RedElementDirective,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    UserComponent,
    ErrorPageComponent,
    AboutCompanyComponent,
    AboutMeComponent,
    FooterComponent,
    AddUserPOSTAPIComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatBadgeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
