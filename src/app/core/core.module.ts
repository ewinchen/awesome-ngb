import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule, ActionReducerMap, Action, ActionReducer } from '@ngrx/store';

import { counterReducer } from './counterReducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule.forRoot(),
    StoreModule.forFeature('count', { count: counterReducer })
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
