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
    img:"assets/img/perfil.jpg"

  }
  constructor() {
    console.log("Servicio de Usuario listo para usarse");
  }


  getUsuario(){
    return this.usuario;
  }

}
