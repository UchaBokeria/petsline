import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
 

import { ProfileRoutingModule } from './profile-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AboutComponent } from './about/about.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BookmarksComponent,
    AnalyticsComponent,
    AboutComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports: [RouterModule]
})
export class ProfileModule { }
