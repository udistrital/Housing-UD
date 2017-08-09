import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private usuario:any;

  constructor(private servicioUsuario: UsuarioService) { }



  ngOnInit() {
    this.usuario= this.servicioUsuario.getUsuario();
  }


}
