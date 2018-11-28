import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './view/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    loadChildren: './view/blog/blog.module#BlogModule'
  },
  {
    path: 'main',
    loadChildren: './view/main/main.module#MainModule'
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
export class AppRoutingModule { }
