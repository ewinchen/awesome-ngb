import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';
import { BlogLayoutComponent } from '../../layout/blog-layout/blog-layout.component';

const routes: Routes = [
  {
    path: '',
    component: BlogLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
