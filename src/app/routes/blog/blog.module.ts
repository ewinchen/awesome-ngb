import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { LayoutModule } from '../../layout/layout.module';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsModule } from './posts/posts.module';
import { AboutComponent } from './about/about.component';

import { CounterService } from "./posts/di/counter.service";


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    LayoutModule,
    SharedModule,
    PostsModule
  ],
  providers: [CounterService],
  declarations: [AboutComponent]
})
export class BlogModule { }
