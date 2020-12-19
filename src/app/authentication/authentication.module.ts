import { NgModule } from '@angular/core';
import { authRoutes } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FirstComponent } from './components/first/first.component';
import { ChildAComponent } from './components/first/child-a/child-a.component';
import { ChildBComponent } from './components/first/child-b/child-b.component';

@NgModule({
  declarations: [DashboardComponent, FirstComponent, ChildAComponent, ChildBComponent],
  exports: [
      DashboardComponent,
      RouterModule
  ],
  providers: [],
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  bootstrap: [],
})
export class AuthenticationModule { }
