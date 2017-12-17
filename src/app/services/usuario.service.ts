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
      nombres: "",
      apellidos: "",
    },
    identificacion:{
      tipoIdentificacion: "",
      numeroIdentificacion: "",
    },
    idioma:"",
    estadoCivil:"",
    fechaNacimiento: "",
    sangre:{
      tipoSangre:"O",
      rh:"+"
    },
    genero:"fEME",
    educacion:{
      codigo:"",
      facultad:"O",
      carrera:"+"
    },
    rol:"",
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
    },
    alojamiento:{
      barrio:"",
      direccion:"",
      estrato:"",
      conQuienVive:"",
      numeroPersonasNucleoFamiliar:"",
      tipoDeCasa:""
    },
    condicionesMedicas:{
      enfermedades:"",
      alergias:"",
      medicamentos:""
    },
    limitaciones:{
      limitacionAuditva:"",
      limitacionFisica:"",
      limitacionMental:"",
      limitacionVisual:"",
      otraLimitacion:""
    },
    contactoEmergencia:{
      nombreCompleto:{
        nombres: "",
        apellidos: "",
      },
      parentesco:"",
      contacto:{
        indicativo:"",
        telefonoFijo:"",
        celular:"",
        correo:""
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
