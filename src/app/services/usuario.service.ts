import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable()
export class UsuarioService {

  private usuario:Usuario ={
    nombreCompleto:{
      nombres: "",
      apellidos: "",
    },
    fechaNacimiento: "",
    sangre:{
      tipoSangre:"O",
      rh:"+"
    },
    genero:"fEME",
    facultad:"",
    carrera:"",
    rol:"",
    sobreMi:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img:"assets/img/perfil.jpg",
    movilidad:{
      universidadOrigen:  "",
      universidadDestino:"",
      duracionMovilidad: ""
    },
    contacto:{
      indicativo:"",
      telefonoFijo:"",
      celular:"",
      correo:""
    }



  }
  constructor() {
    console.log("Servicio de Usuario listo para usarse");
  }


  public getUsuario(){
    return this.usuario;
  }


}
