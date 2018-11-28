import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostComponent } from './posts/post/post.component';
import { AboutComponent } from './about/about.component';
import { BlogLayoutComponent } from './shared/blog-layout/blog-layout.component';
import { DiComponent } from "./posts/di/di.component";
import { ContainerComponent } from "./posts/di/container/container.component";
import { ObComponent } from './posts/di/ob.component';

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
        component: PostListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'posts/post/:id',
        component: PostComponent
      },
      {
        path: 'dimain',
        component: ContainerComponent,
        children: [
          {
            path: 'di',
            component: DiComponent
          },
          {
            path: 'ob',
            component: ObComponent
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
