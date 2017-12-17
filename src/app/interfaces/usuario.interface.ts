export interface Usuario {
  key$?:string;
  nombreCompleto:NombreCompleto;
  identificacion:Identificacion;
  idioma:string;
  estadoCivil:string;
  fechaNacimiento:string;
  sangre:Sangre;
  genero:string;
  educacion:Educacion;
  rol:string;
  img:string;
  movilidad:Movilidad;
  contacto:Contacto;
  alojamiento:Alojamiento;
  condicionesMedicas:CondicionesMedicas;
  limitaciones:Limitaciones;
  contactoEmergencia:ContactoDeEmergencia;
}

interface NombreCompleto{
  nombres:string;
  apellidos:string;
}

interface Sangre{
  tipoSangre:string;
  rh:string;
}

interface Educacion{
  codigo:string;
  facultad:string;
  carrera:string;
}

interface Identificacion{
  tipoIdentificacion:string;
  numeroIdentificacion:string;
}

interface Movilidad{
  universidadOrigen:string;
  universidadDestino:string;
  duracionMovilidad:string;
}

interface Contacto{
  indicativo:string;
  telefonoFijo:string;
  celular:string;
  correo:string;
}

interface Alojamiento{
  barrio:string;
  direccion:string;
  estrato:string;
  conQuienVive:string;
  numeroPersonasNucleoFamiliar:string;
  tipoDeCasa:string; // Hace referencia a si es arrendada o propia
}

interface CondicionesMedicas{
  enfermedades:string;
  alergias:string;
  medicamentos:string;
}

interface Limitaciones{
  limitacionAuditva:string;
  limitacionFisica:string;
  limitacionMental:string;
  limitacionVisual:string;
  otraLimitacion:string;

}

interface ContactoDeEmergencia{
    nombreCompleto:NombreCompleto;
    parentesco:string;
    contacto:Contacto;
}
