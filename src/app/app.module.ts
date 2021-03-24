import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipoModule } from './equipo/equipo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EquipoModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
