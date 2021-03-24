import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposComponent } from './equipos/equipos.component';



@NgModule({
  declarations: [
    EquiposComponent
  ],
  exports: [
    EquiposComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EquipoModule { }
