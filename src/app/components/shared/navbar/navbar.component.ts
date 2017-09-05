import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/usuario.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private usuario:Usuario;

  constructor(private servicioUsuario:UsuarioService) { }

  ngOnInit() {
    this.usuario=this.servicioUsuario.getUsuario();
  }


}
