import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { googleAuthConfig } from '../../auth.config';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  loginFailed: boolean = false;
  userProfile: object;



      constructor(private oauthService: OAuthService) {
        this.configureWithNewConfigApi();
      }

      ngOnInit() {
        this.oauthService.getIdentityClaims
      }

      private configureWithNewConfigApi() {
        this.oauthService.configure(googleAuthConfig);
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
        console.log(this.oauthService.loadDiscoveryDocumentAndTryLogin());
      }


      public login() {
      this.oauthService.initImplicitFlow();
      }

        public logout() {
            this.oauthService.logOut();
        }

        

}
