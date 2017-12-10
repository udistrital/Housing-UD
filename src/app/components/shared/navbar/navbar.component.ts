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

  private userProfile;

constructor( private oauthService: OAuthService,
             private router: Router,
             private _usuarioService:UsuarioService) { }

  ngOnInit() {
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
     this.oauthService.logOut();
     //this.router.navigate(['/inicio']);
 }


  }
