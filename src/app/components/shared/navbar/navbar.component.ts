import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/usuario.interface';
import { OAuthService } from "angular-oauth2-oidc";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private usuario:Usuario;
  userName: string;
  password: string;
  loginFailed: boolean = false;
  userProfile: object;


constructor( private oauthService: OAuthService,
             private router: Router,
             private _usuarioService:UsuarioService) { }

  ngOnInit() {

    this.usuario=this._usuarioService.getUsuario();
    console.log('Token Valido');
    console.log(this.oauthService.hasValidIdToken());

  }

  loadUserProfile(): void {
      this
          .oauthService
          .loadUserProfile()
          .then(up => this.userProfile = up);

    }
    get access_token() {
          return this.oauthService.getAccessToken();
      }

      get access_token_expiration() {
        return this.oauthService.getAccessTokenExpiration();
    }

      get givenName() {
          let claims = this.oauthService.getIdentityClaims();
          if (!claims) return null;
          return claims['given_name'];
      }

  public logout():void {
    console.log("Salir");
     this.oauthService.logOut(true);
     this.router.navigate(['/inicio']);
 }


  }
