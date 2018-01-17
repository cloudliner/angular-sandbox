import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { HttpSampleComponent } from "./http-sample.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    HttpSampleComponent
  ],
  exports: [
    HttpSampleComponent
  ]
})
export class HttpModule { }
