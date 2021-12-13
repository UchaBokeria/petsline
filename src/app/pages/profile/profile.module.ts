import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class ProfileModule { }
