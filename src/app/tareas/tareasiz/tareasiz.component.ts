import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareasiz',
  templateUrl: './tareasiz.component.html',
  styleUrls: ['./tareasiz.component.css']
})
export class TareasizComponent implements OnInit {
  
  constructor(private tareasService:TareasService) { }

  ngOnInit(): void {
  }

  public get  cantidad(){
    return this.tareasService.tareas.length;
  }

}
