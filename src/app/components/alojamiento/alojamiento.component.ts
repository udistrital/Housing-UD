import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html',
  styleUrls: ['./alojamiento.component.css']
})
export class AlojamientoComponent implements OnInit {

  //Variables para el mapa
  lat:number = 4.627837801285463;
  lng:number = -74.15065860000004;
  zoom:number = 16;

  //marcadores
  markers: marker[]=[
    {
      nombre:"Facultad Ingeniería",
      lat:4.6281962,
      lng: -74.06568909999999,
      arrastrable:true
    },
    {
      nombre:"Facultad Ingeniería",
      lat:4.6281962,
      lng: -74.06568909999999,
      arrastrable:true
    }
  ];

  constructor() { }

  //Interface marker

  ngOnInit() {
  }

}
interface marker{
  nombre?:string;
  lat:number;
  lng:number;
  arrastrable:boolean;
}
