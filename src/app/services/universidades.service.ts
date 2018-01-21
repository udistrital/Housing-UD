import { Universidad } from '../interfaces/universidad.interface';
import { Injectable } from '@angular/core';


@Injectable()
export class UniversidadesService {

  private universidades: Universidad[] = [
    {
      nombre: 'Universidad Distrital Francisco José de Caldas',
      pais: 'Colombia',
      carreras: ['Ingeniería de Sistemas', 'Industrial', 'Danzas']
    },
    {
      nombre: 'Universidad de la Plata',
      pais: 'Argentina',
      carreras: ['Catastral', 'Ambiental', 'Arte']
    },
    {
      nombre: 'Universidad Nacional Autónoma de México',
      pais: 'México',
      carreras: ['Electrica', 'Electrónica', 'Civil']
    }
  ];

  constructor() { }

  getUniversidades(): Universidad[] {
      return this.universidades;
  }

  buscarPaisOrigen(): string {
    return 'prueba';


  }
}
