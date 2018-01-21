import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario.interface';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../services/usuario.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private usuario: Usuario;
  private nombre: string;

  private userProfile: any;

constructor( private oauthService: OAuthService,
             private router: Router,
             private _usuarioService: UsuarioService) { }

  ngOnInit() {
    console.log(this.oauthService.hasValidAccessToken());
     this.loadUserProfile();
      this.nombre = this.name;
      this.usuario = this._usuarioService.getUsuario();

  }

  public get name() {
      const claims = this.oauthService.getIdentityClaims();
      if (!claims) {
          return null;
      }
      console.log(claims);
      return this.nombre = claims['name'];
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


  public logout(): void {
    console.log('Salir');
     this.oauthService.logOut();
     //  sthis.router.navigate(['/inicio']);
 }

 /*public esEstudiante():boolean{
   if(this.usuario.rol.toUpperCase() == 'ESTUDIANTE'){
      return true;
   }
    return false;
 }*/


  }
