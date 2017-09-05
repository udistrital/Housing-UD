import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private usuario:Usuario;

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.servicioUsuario.getUsuario();
  }

}
