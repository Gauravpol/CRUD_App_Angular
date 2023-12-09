import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './Auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  // {path:'',redirectTo:'Employee-list',pathMatch:'full'},
  {path:'login',component:LoginComponent},

  {path: 'dashboard',component:DashboardComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'Employee-Details/:id',component:EmployeeDetailsComponent},
  {path:'edit/:id',component:EmployeeFormComponent},
  {path:'Add-new-employee',component:EmployeeFormComponent},
  {path:'Logout',component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
