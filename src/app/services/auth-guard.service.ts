import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
// import { UsuarioService } from "./usuario.service";
// import { Usuario } from "../interfaces/usuario.interface";

@Injectable()
export class AuthGuardService implements CanActivate {

  // private usuario: Usuario;

  constructor( private oauthService: OAuthService ) {

               // private usuarioService:UsuarioService ) {
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
/*public esEstudiante():boolean{
  if(this.usuario.rol.toUpperCase() == 'ESTUDIANTE'){
     return true;
  }
   return false;
}

 canActivate(route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot){
   if(this.esEstudiante()){
     return false;
  }
   return true;
 }

}*/
