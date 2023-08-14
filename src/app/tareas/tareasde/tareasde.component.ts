import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareasde',
  templateUrl: './tareasde.component.html',
  styleUrls: ['./tareasde.component.css']
})
export class TareasdeComponent implements OnInit {
//  public tareas:string[]=['cepillarse','bañarce','desayunar','transportarce','trabajar',
// 'mirar la hora','almorzar']

  constructor(private tareasService:TareasService) { }

  ngOnInit(): void {
  }

  public get tareas(){
    return this.tareasService.tareas;
  }

  public completar(t: any) {
    console.log(t);
  }

}
