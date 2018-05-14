import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    loadChildren: 'src/app/routes/blog/blog.module#BlogModule'
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
