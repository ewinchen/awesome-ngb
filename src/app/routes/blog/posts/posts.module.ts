import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostPreviewComponent } from './post-list/post-preview/post-preview.component';
import { CarouselComponent } from './post-list/carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [PostListComponent, PostComponent, PostPreviewComponent, CarouselComponent]
})
export class PostsModule { }
