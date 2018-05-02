import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    MainLayoutComponent
  ]
})
export class LayoutModule { }
