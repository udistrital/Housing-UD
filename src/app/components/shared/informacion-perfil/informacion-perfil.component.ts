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

CalcularEdad():number{
  if (this.usuario.fechaNacimiento) {
      let hoy = new Date();
      let cumpleanos = new Date(this.usuario.fechaNacimiento);
      let edad = hoy.getFullYear() - cumpleanos.getFullYear();
      return edad;
    }else {
        return null;
      }
}

}
