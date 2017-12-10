/**
* PILAS TODOS LOS COMENTARIOS CORRESPONDEN AL IDP ANTERIOR
**/
import { OAuthService } from 'angular-oauth2-oidc';
//import { JwksValidationHandler } from 'angular-oauth2-oidc';
//import { googleAuthConfig } from '../../auth.config';

import { Component, OnInit } from '@angular/core';
//import { AuthService } from "../../services/auth.service";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  //loginFailed: boolean = false;
  //userProfile: object;



      constructor(private oauthService: OAuthService) {

      }
      ngOnInit() {
          console.log(this.oauthService.hasValidAccessToken());
        }

        login(): void {
          this.oauthService.initImplicitFlow();
        }



/*
    constructor(private authService: AuthService) {

      }

      ngOnInit() {
      //  this.oauthService.getIdentityClaims();
      //  console.log(this.oauthService.getIdentityClaims());
      }

      login():void{
        this.authService.login();
      }
/*
      private configureWithNewConfigApi() {
        this.oauthService.configure(googleAuthConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        console.log(this.oauthService.loadDiscoveryDocumentAndTryLogin());
      }


      public login() {
        console.log("llego");
      this.oauthService.initImplicitFlow();

      }

    public  logout():void {
     this.oauthService.logOut(true);
    }


        public loadUserProfile(): void {
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
               var claims = this.oauthService.getIdentityClaims();
               if (!claims) return null;
               return claims['given_name'];
           }


*/


}
