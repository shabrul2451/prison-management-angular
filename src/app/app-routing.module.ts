import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'stuffs', loadChildren: () => import('./stuffs/stuffs.module').then(m => m.StuffsModule) }, 
  { path: 'inmates', loadChildren: () => import('./inmates/inmates.module').then(m => m.InmatesModule) }, 
  { path: 'visitors', loadChildren: () => import('./visitors/visitors.module').then(m => m.VisitorsModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
