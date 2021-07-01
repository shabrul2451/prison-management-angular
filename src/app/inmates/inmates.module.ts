import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InmatesRoutingModule } from './inmates-routing.module';
import { InmatesComponent } from './inmates.component';
import {MatIconModule} from '@angular/material/icon';
import { InmateCreateComponent } from './inmate-create/inmate-create.component';


@NgModule({
  declarations: [
    InmatesComponent,
    InmateCreateComponent
  ],
    imports: [
        CommonModule,
        InmatesRoutingModule,
        MatIconModule
    ]
})
export class InmatesModule { }
