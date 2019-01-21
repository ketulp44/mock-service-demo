import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisteredComponent} from './registered/registered.component';
import {FormComponent} from './form/form.component';
const routes: Routes = [
    { path: '',  component: FormComponent, pathMatch: 'full' },
   { path: 'registered', component: RegisteredComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
