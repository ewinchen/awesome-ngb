import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found/not-found.component';

import { RoutesRoutingModule } from './routes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [RoutesRoutingModule]
})
export class RoutesModule { }
