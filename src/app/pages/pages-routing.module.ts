import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WildcardComponent } from './wildcard/wildcard.component';

import { UserComponent } from './profile/user/user.component';
import { DashboardComponent } from './profile/dashboard/dashboard.component';
import { BookmarksComponent } from './profile/bookmarks/bookmarks.component';
import { AnalyticsComponent } from './profile/analytics/analytics.component';
import { AboutComponent } from './profile/about/about.component';


const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "Login",
        component: LoginComponent,
      },
      {
        path: "SignUp",
        component: SignupComponent,
      },
      {
        path: "Home",
        component: HomeComponent,
      },
      {
        path: "Products",
        component: ProductsComponent,
      },
      {
        path: "Help",
        component: HelpComponent,
      },
      {
        path: "Profile",
        component: UserComponent,
        children: [
          {
            path: "Dashboard",
            component: DashboardComponent
          },
          {
            path: "Bookmarks",
            component: BookmarksComponent
          },
          {
            path: "Analytics",
            component: AnalyticsComponent
          },
          {
            path: "About",
            component: AboutComponent
          },
          {
            path: "",
            redirectTo: "Dashboard",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "",
        redirectTo: "Home",
        pathMatch: "full"
      },
      {
        path: "**",
        component: WildcardComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
