import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  public tareas=[
    {
      tarea:'cepillarse',
      estado:false
    },
    {
      tarea:'bañarce',
      estado:false
    },
    {
      tarea:'desayunar',
      estado:false
    },
    {
      tarea:'transportarce',
      estado:false
    },
    {
      tarea:'trabajar',
      estado:false
    },
    {
      tarea:'mirar la hora',
      estado:false
    },
    {
      tarea:'almorzar',
      estado:false
    }

  ]
  constructor() { }

  public completarTarea(i:any){
    const tarea = this.tareas.find(tarea=>{
      return tarea.tarea===i
    })!
    tarea.estado=!tarea.estado
    console.log(this.tareas);
  }
}
