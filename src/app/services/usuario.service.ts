import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  private usuario:any ={
    nombreCompleto:{
      nombre: "Alexis",
      apellido: "Ortiz",
    },
    fechaNacimiento: "02/08/1995",
    sangre:{
      tipoSangre:"O",
      rh:"+"
    },
    genero:"Masculino",
    facultad:"Ingeniería",
    carrera:"Ingeniería Industrial",
    rol:"Estudiante",
    sobreMi:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    img:"assets/img/perfil.jpg",
    movilidad:{
      universidadOrigen:  "Universidad Distrital Francisco José de Caldas",
      universidadDestino:"Universidad de Chile",
      duracionMovilidad: "2"
    },
    contacto:{
      indicativo:"+57",
      telefonoFijo:"1235678",
      celular:"3008977654",
      correo:"ceri@udistrital.edu.co"
    }


  }
  constructor() {
    console.log("Servicio de Usuario listo para usarse");
  }


  getUsuario(){
    return this.usuario;
  }

}
