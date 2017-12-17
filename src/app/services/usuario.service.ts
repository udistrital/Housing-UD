import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';
import { Http } from '@angular/http';






@Injectable()
export class UsuarioService {

  //URL DE PETICION
  usuariosURL:string= "https://housingud-501cb.firebaseio.com/estudiantes.json";
  usuarioURL:string ="https://housingud-501cb.firebaseio.com/estudiantes/1.json";


  private usuario:Usuario ={
    nombreCompleto:{
      nombres: "Diana Catalina",
      apellidos: "Cano Narváez",
    },
    identificacion:{
      tipoIdentificacion: "Cédula de Ciudadania",
      numeroIdentificacion: "1018478838",
    },
    idioma:"Español",
    estadoCivil:"Soltera",
    fechaNacimiento: "02/08/1995",
    sangre:{
      tipoSangre:"O",
      rh:"+"
    },
    genero:"Femenino",
    educacion:{
      codigo:"20121020079",
      facultad:"Ingeniería",
      carrera:"Ingeniería de Sistemas"
    },
    rol:"Estudiante",
    img:"https://lh3.googleusercontent.com/-v-4Z74_98t0/AAAAAAAAAAI/AAAAAAAAKmw/SQuUiX3WSWk/s96-c/photo.jpg",
    movilidad:{
      universidadOrigen:  "Universidad Distrital Francisco José de Caldas",
      universidadDestino:"Universidad de Buenos Aires",
      duracionMovilidad: "2 Semestres"
    },
    contacto:{
      indicativo:"+57",
      telefonoFijo:"2345678",
      celular:"300123456",
      correo:"catalinacano08@hotmail.com"
    },
    alojamiento:{
      barrio:"Banderas",
      direccion:"Calle 12 # 45 - 67 sur",
      estrato:"3",
      conQuienVive:"Mamá, Papá, Hermana",
      numeroPersonasNucleoFamiliar:"3",
      tipoDeCasa:"Propia"
    },
    condicionesMedicas:{
      enfermedades:"Ninguna",
      alergias:"Ninguna",
      medicamentos:"Ninguna"
    },
    limitaciones:{
      limitacionAuditva:"Ninguna",
      limitacionFisica:"Ninguna",
      limitacionMental:"Ninguna",
      limitacionVisual:"Ninguna",
      otraLimitacion:"Muletas"
    },
    contactoEmergencia:{
      nombreCompleto:{
        nombres: "María del Pilar",
        apellidos: "Narvaéz Corcho",
      },
      parentesco:"Madre",
      contacto:{
        indicativo:"+57",
        telefonoFijo:"3456789",
        celular:"3208975634",
        correo:"pilar@hotmail.com"
      }

    }


  }

  constructor(private http:Http) {
    console.log("Servicio de Usuario listo para usarse");
  }


  public getUsuario(){
    return this.usuario;
  }


}
