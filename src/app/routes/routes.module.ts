import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HelloComponent } from './main-layout/hello/hello.component';
import { GoodbyeComponent } from './main-layout/goodbye/goodbye.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RoutesRoutingModule } from './routes-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [
    // Entry Components
    MainLayoutComponent,
    HelloComponent,
    GoodbyeComponent,
    NotFoundComponent
  ],
  exports: [RoutesRoutingModule]
})
export class RoutesModule { }
