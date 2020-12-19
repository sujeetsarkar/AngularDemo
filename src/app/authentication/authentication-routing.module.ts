import { Routes } from "@angular/router";
import { PageNotFoundComponentComponent } from "../components/shared/page-not-found-component/page-not-found-component.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";


export const authRoutes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', component: PageNotFoundComponentComponent }
]
