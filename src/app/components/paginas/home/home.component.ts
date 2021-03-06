import { Component, OnInit } from '@angular/core';

// import { AuthService } from "../../services/auth.service";
// import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
// import { googleAuthConfig } from '../../auth.config';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private usuario: Usuario;
    // loginFailed: boolean = false;
    // userProfile: object;
    private nombre: string;
    private correo: string;
    private userProfile: any;

    // email: string;

    constructor(private oauthService: OAuthService,
                // private AuthService:AuthService,
                private usuarioService: UsuarioService) {


    }

    ngOnInit() {
      this.usuario = this.usuarioService.getUsuario();
      console.log(this.oauthService.hasValidAccessToken());
      this.nombre = this.name;

    }

    loadUserProfile(): void {
        this
            .oauthService
            .loadUserProfile()
            .then(up => this.userProfile = up);

      }


    public get name() {
        const claims = this.oauthService.getIdentityClaims();
        if (!claims) {
            return null;
        }
        console.log(claims);
        return this.nombre= claims['name'];
    }





    /*

    get getNombre() {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return this.nombre =claims['given_name'];
    }

    get getEmail():string {
        let claims = this.oauthService.getIdentityClaims();
        if (!claims) return null;
        return this.email= claims['email'];
    }

    testSilentRefresh() {
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
*/



}
