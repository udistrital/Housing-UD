export interface Usuario {
  'nombreCompleto':NombreCompleto;
  'fechaNacimiento':Date;
  'sangre':Sangre;
  'genero':string;
  'facultad':string;
  'carrera':string;
  'rol':string;
  'sobreMi':string;
  'img':string;

}

interface NombreCompleto{
  'nombres':string;
  'apellidos':string;
}

interface Sangre{
  'tipoSangre':string;
  'rh':string;
}
