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

//  constructor(private servicioUsuario:UsuarioService) { }
constructor(private oauthService: OAuthService,   private router: Router) { }

  ngOnInit() {
  //  this.usuario=this.servicioUsuario.getUsuario();
  }

  public logout() {
    console.log("Salir");
    console.log("Hace: "+this.oauthService.logOut());
      this.oauthService.logOut();
      this.router.navigate(['/inicio']);
  }

}
