import { Injectable } from '@angular/core';
import { Tareas } from '../interface/tareas.interface';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  public tareas:Array<Tareas>=[
    {
      tarea:'cepillarse',
      estado:true
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

  public tareasCompletas(){
    let can = 0;
    this.tareas.forEach(t=>{
      if (t.estado) {
        can++;
      }
    })
    return can;
  }
  public insertar(nt:any){
    let data={
      tarea: nt,
      estado:false
    }
    this.tareas.push(data)
  }

  public eliminar(x:string){
    this.tareas=this.tareas.filter(tar => tar.tarea !== x)
  }
}
