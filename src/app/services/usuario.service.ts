import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService {
  private usuario:any ={
    nombre: "Alexis",
    apellido: "Ortiz",
    facultad:"Ingeniería",
    carrera:"Ingeniería Industrial",
    rol:"Estudiante",
    img:"assets/img/perfil.jpg"

  }
  constructor() {
    console.log("Servicio listo para usarse");
  }


  getUsuario(){
    return this.usuario;
  }

}
