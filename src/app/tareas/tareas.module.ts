import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponeteTareasComponent } from './componete-tareas/componete-tareas.component';
import { TareasdeComponent } from './tareasde/tareasde.component';
import { TareasizComponent } from './tareasiz/tareasiz.component';



@NgModule({
  declarations: [
    ComponeteTareasComponent,
    TareasdeComponent,
    TareasizComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ComponeteTareasComponent]
})
export class TareasModule { }
