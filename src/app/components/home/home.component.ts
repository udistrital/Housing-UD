import { Component, OnInit } from '@angular/core';
import { UsuarioService } from "../../services/usuario.service";
import { Usuario } from '../../interfaces/usuario.interface';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /*private usuario:Usuario;

  constructor(private servicioUsuario: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.servicioUsuario.getUsuario();
  }*/

    loginFailed: boolean = false;
    userProfile: object;

    constructor(private oauthService: OAuthService) {
        // Tweak config for implicit flow.
        // This is just needed b/c this demo uses both,
        // implicit flow as well as password flow
        // this.oauthService.configure(authConfig)
    }

    ngOnInit() {
      this.oauthService.getIdentityClaims

    }




}
