import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { RoutesModule } from './routes/routes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RoutesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
