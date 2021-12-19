import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthguardServiceService } from '../authguard-service.service';

import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';

import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagingComponent } from './paging/paging.component';
import { ProfileModule } from './profile/profile.module';
import { WildcardComponent } from './wildcard/wildcard.component';
import { DetailComponent } from './detail/detail.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    HelpComponent,
    LoginComponent,
    SignupComponent,
    PagingComponent,
    MainComponent,
    WildcardComponent,
    DetailComponent,
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ProfileModule
  ]
})
export class PagesModule { }
