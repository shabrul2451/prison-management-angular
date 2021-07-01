import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorsComponent } from './visitors.component';
import {VisitorCreateComponent} from './visitor-create/visitor-create.component';

const routes: Routes = [
  { path: '', component: VisitorsComponent },
  { path: 'create_new', component: VisitorCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorsRoutingModule { }
