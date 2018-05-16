import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { LayoutModule } from '../../layout/layout.module';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsModule } from './posts/posts.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule,
    SharedModule,
    PostsModule
  ],
  declarations: [AboutComponent]
})
export class BlogModule { }
