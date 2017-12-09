import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  CalculateAge(): number {
    //if (this.datosDTO.datosPersonales.fechaNacimiento) {
      //  var timeDiff = Math.abs(Date.now() - this.datosDTO.datosPersonales.fechaNacimiento);
        return  9//Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365);
    } //else {
    //    return null;
  // }
//}

}
