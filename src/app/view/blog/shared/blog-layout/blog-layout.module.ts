import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

import { BlogLayoutComponent } from '../blog-layout/blog-layout.component';
import { BlogHeaderComponent } from '../blog-layout/blog-header/blog-header.component';
import { BlogAsideComponent } from '../blog-layout/blog-aside/blog-aside.component';
import { BlogFooterComponent } from '../blog-layout/blog-footer/blog-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    BlogLayoutComponent,
    BlogHeaderComponent,
    BlogAsideComponent,
    BlogFooterComponent
  ]
})
export class BlogLayoutModule { }
