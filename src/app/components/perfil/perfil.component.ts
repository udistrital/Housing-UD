import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interfaces/usuario.interface';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private usuario:Usuario;

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.usuario= this.servicioUsuario.getUsuario();
  }


}
