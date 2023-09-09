import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { PopupModulComponent } from './popup-modul/popup-modul.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { DatesComponent } from './dates/dates.component';
import { MathComponent } from './math/math.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    PopupModulComponent,
    DatesComponent,
    MathComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
