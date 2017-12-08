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
    nombre:string ="Prueba";

    constructor(private oauthService: OAuthService) {
        // Tweak config for implicit flow.
        // This is just needed b/c this demo uses both,
        // implicit flow as well as password flow
        // this.oauthService.configure(authConfig)
    }

    ngOnInit() {
      //yo lo puse de prueba
      this.oauthService.getIdentityClaims;
      //this.nombre= this.givenName();
    }

    loadUserProfile(): void {
        this
            .oauthService
            .loadUserProfile()
            .then(up => this.userProfile = up);

    }

    get givenName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['given_name'];
    }

    get familyName() {
        var claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return claims['family_name'];
    }

    testSilentRefresh() {
        /*
         * Tweak config for implicit flow.
         * This is needed b/c this sample uses both flows
        */
        //this.oauthService.clientId = "spa-demo";
        this.oauthService.oidc = true;

        this
            .oauthService
            .silentRefresh()
            .then(info => console.debug('refresh ok', info))
            .catch(err => console.error('refresh error', err));
    }

    set requestAccessToken(value: boolean) {
        this.oauthService.requestAccessToken = value;
        localStorage.setItem('requestAccessToken', '' + value);
    }

    get requestAccessToken() {
        return this.oauthService.requestAccessToken;
    }

    get id_token() {
        return this.oauthService.getIdToken();
    }

    get access_token() {
        return this.oauthService.getAccessToken();
    }

    get id_token_expiration() {
        return this.oauthService.getIdTokenExpiration();
    }

    get access_token_expiration() {
        return this.oauthService.getAccessTokenExpiration();
    }




}
