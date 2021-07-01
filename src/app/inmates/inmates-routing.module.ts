import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmatesComponent } from './inmates.component';
import {InmateCreateComponent} from './inmate-create/inmate-create.component';

const routes: Routes = [
  { path: '', component: InmatesComponent },
  { path: 'create_new', component: InmateCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InmatesRoutingModule { }
