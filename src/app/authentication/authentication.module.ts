import { NgModule } from '@angular/core';
import { authRoutes } from './authentication-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
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
