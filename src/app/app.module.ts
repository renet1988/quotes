import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FirstService } from './service/first.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    HttpClientModule,
  ],
  providers: [
    FirstService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
