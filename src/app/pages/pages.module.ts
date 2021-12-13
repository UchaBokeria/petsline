import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagingComponent } from './paging/paging.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    HelpComponent,
    LoginComponent,
    SignupComponent,
    PagingComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
