import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postulacion',
  templateUrl: './postulacion.component.html',
  styleUrls: ['./postulacion.component.css']
})
export class PostulacionComponent implements OnInit {

  porcentaje: number= 0;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor: number) {
    if (this.porcentaje === 0 || this.porcentaje <= 100) {
      this.porcentaje = this.porcentaje + valor;
    }else if (this.porcentaje >= 100) {
        this.porcentaje = 100;
    }else {
      this.porcentaje = 0;
    }
}
}
