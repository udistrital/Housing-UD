export interface Usuario {
  key$?:string;
  nombreCompleto:NombreCompleto;
  fechaNacimiento:string;
  sangre:Sangre;
  genero:string;
  facultad:string;
  carrera:string;
  rol:string;
  sobreMi:string;
  img:string;
  movilidad:Movilidad;
  contacto:Contacto;

}

interface NombreCompleto{
  nombres:string;
  apellidos:string;
}

interface Sangre{
  tipoSangre:string;
  rh:string;
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
