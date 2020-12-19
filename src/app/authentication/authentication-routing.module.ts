import { Routes } from "@angular/router";
import { PageNotFoundComponentComponent } from "../components/shared/page-not-found-component/page-not-found-component.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ChildAComponent } from "./components/first/child-a/child-a.component";
import { ChildBComponent } from "./components/first/child-b/child-b.component";
import { FirstComponent } from "./components/first/first.component";


export const authRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'first-component',
        component: FirstComponent, // this is the component with the <router-outlet> in the template
        children: [
          {
            path: 'child-a', // child route path
            component: ChildAComponent, // child route component that the router renders
          },
          {
            path: 'child-b',
            component: ChildBComponent, // another child route component that the router renders
          },
        ],
      },
    { path: '**', component: PageNotFoundComponentComponent }
]
