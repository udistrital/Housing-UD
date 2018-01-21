import { Component, OnInit } from '@angular/core';
import { AlojamientosService } from '../../../services/alojamientos.service';



@Component({
  selector: 'app-alojamientos',
  templateUrl: './alojamientos.component.html',
  styleUrls: ['./alojamientos.component.css']
})
export class AlojamientosComponent implements OnInit {
     p: number = 1;
     alojamientos : any[] =[];

  constructor( private servicioAlojamientos:AlojamientosService) {
  }

  ngOnInit() {
    this.alojamientos=this.servicioAlojamientos.getAlojamientos();
  }
}
