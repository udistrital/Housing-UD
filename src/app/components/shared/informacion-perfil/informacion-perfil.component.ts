import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/usuario.interface';

@Component({
  selector: 'informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {

  private usuario:Usuario;

  constructor(private _usuarioService:UsuarioService) { }

  ngOnInit() {
    this.usuario= this._usuarioService.getUsuario();
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
