import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareasde',
  templateUrl: './tareasde.component.html',
  styleUrls: ['./tareasde.component.css']
})
export class TareasdeComponent implements OnInit {
 public tareas:string[]=['cepillarse','bañarce','desayunar','transportarce','trabajar',
'mirar la hora','almorzar']
  constructor() { }

  ngOnInit(): void {
  }

}
