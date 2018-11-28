import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { SleepingComponent } from './sleeping/sleeping.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule,
  ],
  declarations: [SleepingComponent]
})
export class LazyModule { }
