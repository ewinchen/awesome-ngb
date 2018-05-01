import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HelloComponent } from './main-layout/hello/hello.component';
import { GoodbyeComponent } from './main-layout/goodbye/goodbye.component';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main-layout',
    pathMatch: 'full'
  },
  {
    path: 'main-layout',
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
        path: 'lazy',
        loadChildren: 'src/app/routes/main-layout/lazy/lazy.module#LazyModule'
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
