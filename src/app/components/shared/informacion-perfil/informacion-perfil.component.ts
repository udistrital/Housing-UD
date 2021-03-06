import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {

  private usuario: Usuario;
  private userProfile: any;

  constructor(private usuarioService: UsuarioService,
              private oauthService: OAuthService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.oauthService.hasValidAccessToken());
    console.log('USUARIO');
    console.log(this.usuario);
    // this.loadUserProfile();
  }

  loadUserProfile(): void {
      this
          .oauthService
          .loadUserProfile()
          .then(up => this.userProfile = up);

    }

CalcularEdad(): number {
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
