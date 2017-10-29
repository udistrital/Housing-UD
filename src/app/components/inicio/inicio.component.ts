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
