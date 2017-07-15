import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { DataDrivenComponent } from './data-driven/data-driven.component';
import { DataDriven2Component } from './data-driven2/data-driven2.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDrivenComponent,
    DataDriven2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
