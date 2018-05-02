import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { GoodbyeComponent } from './goodbye/goodbye.component';

import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HungeryComponent } from './eager/hungery/hungery.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'hello',
        component: HelloComponent
      },
      {
        path: 'goodbye',
        component: GoodbyeComponent
      },
      {
        path: 'eager',
        children: [
          {
            path: 'hungery',
            component: HungeryComponent
          },
          {
            path: '',
            redirectTo: 'hungery',
            pathMatch: 'full'
          }
        ]
      },
      {
        path: 'lazy',
        loadChildren: 'src/app/routes/main/lazy/lazy.module#LazyModule'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
