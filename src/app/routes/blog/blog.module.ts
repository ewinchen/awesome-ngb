import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../../layout/layout.module';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsComponent } from './posts/posts.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule
  ],
  declarations: [PostsComponent, AboutComponent]
})
export class BlogModule { }
