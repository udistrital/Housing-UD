import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces/usuario.interface';
import { UsuarioService } from '../../../services/usuario.service';
import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  private usuario: Usuario;
  private nombreCompleto: string;
  private email: string;
  private userProfile: any;

  constructor(private servicioUsuario: UsuarioService,
              private oauthService: OAuthService) { }

  ngOnInit() {
    this.usuario = this.servicioUsuario.getUsuario();
    console.log(this.usuario);
    console.log(this.oauthService.hasValidAccessToken());
    // this.loadUserProfile();
    // const claims = this.oauthService.getIdentityClaims();
    // this.nombreCompleto= claims['name'];
    // this.email = claims['email'];

  }

  loadUserProfile(): void {
      this
          .oauthService
          .loadUserProfile()
          .then(up => this.userProfile = up);

    }


}
