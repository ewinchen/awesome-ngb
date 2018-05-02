import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: 'src/app/routes/main/main.module#MainModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }),

  ],
  exports: [RouterModule]
})
export class RoutesRoutingModule { }
