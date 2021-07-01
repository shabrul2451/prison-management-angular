import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StuffsComponent } from './stuffs.component';
import {StuffCreateComponent} from './stuff-create/stuff-create.component';

const routes: Routes = [
  { path: '', component: StuffsComponent },
  { path: 'create_new', component: StuffCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StuffsRoutingModule { }
