import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { IndexComponent } from './components/index/index.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [

    {path: 'employee', component: EmployeeComponent},
    {path: 'index', component: IndexComponent},
    {path: 'add', component: AddComponent},
    {path: '**', component: IndexComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
