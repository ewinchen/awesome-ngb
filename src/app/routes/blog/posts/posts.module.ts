import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { PostPreviewComponent } from './post-list/post-preview/post-preview.component';
import { CarouselComponent } from './post-list/carousel/carousel.component';
import { NgrxComponent } from './ngrx/ngrx.component';
import { DiComponent } from './di/di.component';
import { ObComponent } from './di/ob.component';
import { CounterService } from "./di/counter.service";
import { ContainerComponent } from './di/container/container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    PostListComponent,
    PostComponent,
    PostPreviewComponent,
    CarouselComponent,
    NgrxComponent,
    DiComponent,
    ContainerComponent,
    ObComponent
  ]
})
export class PostsModule { }
