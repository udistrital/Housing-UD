import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private oauthService: OAuthService ) {
                   //private usuarioService:UsuarioService ) {
                    // this.usuario = this.usuarioService.getUsuario();
                    }
      canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ) {
            const hasIdToken = this.oauthService.hasValidIdToken();
            console.log('id_token', hasIdToken);
            const hasAccessToken = this.oauthService.hasValidAccessToken();
            console.log('acces_token', hasAccessToken);
            console.log('return', hasIdToken && hasAccessToken);
            return (hasIdToken && hasAccessToken);
     }
    }
