import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitorsRoutingModule } from './visitors-routing.module';
import { VisitorsComponent } from './visitors.component';
import {MatIconModule} from '@angular/material/icon';
import { VisitorCreateComponent } from './visitor-create/visitor-create.component';


@NgModule({
  declarations: [
    VisitorsComponent,
    VisitorCreateComponent
  ],
    imports: [
        CommonModule,
        VisitorsRoutingModule,
        MatIconModule
    ]
})
export class VisitorsModule { }
