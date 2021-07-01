import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StuffsRoutingModule } from './stuffs-routing.module';
import { StuffsComponent } from './stuffs.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { StuffCreateComponent } from './stuff-create/stuff-create.component';


@NgModule({
  declarations: [
    StuffsComponent,
    StuffCreateComponent
  ],
  imports: [
    CommonModule,
    StuffsRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class StuffsModule { }
