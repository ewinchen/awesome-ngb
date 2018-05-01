import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SleepingComponent } from './sleeping/sleeping.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sleeping',
    pathMatch: 'full'
  },
  {
    path: 'sleeping',
    component: SleepingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
