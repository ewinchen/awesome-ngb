import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';

import { FooterComponent } from '../main-layout/footer/footer.component';
import { HeaderComponent } from '../main-layout/header/header.component';
import { AsideComponent } from '../main-layout/aside/aside.component';
import { MainLayoutComponent } from '../main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AsideComponent,
    MainLayoutComponent,
  ]
})
export class MainLayoutModule { }
