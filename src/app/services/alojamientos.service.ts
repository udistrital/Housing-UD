import { Injectable } from '@angular/core';



@Injectable()
export class AlojamientosService {
  private alojamientos: any[] = [
    {
      nombre: 'Catalina Cano',
      descripcion: 'Casa de familia ubicada en el suroccidente la ciudad.',
      img: 'assets/img/img1.jpg',
      intercambios: '1',
      habitantes: '4',
      publicacion: '10/01/2017'
    },
    {
      nombre: 'Cristhian Riaño',
      descripcion: 'Apartaestudio familiar amoblado',
      img: 'assets/img/img2.jpeg',
      intercambios: '0',
      habitantes: '6',
      publicacion: '01/05/2017'
    },
    {
      nombre: 'Frida Narváez',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img3.jpg',
      intercambios: '0',
      habitantes: '5',
      publicacion: '11/05/2017'
    },
    {
      nombre: 'Ximena Rodriguez',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img4.JPG',
      intercambios: '5',
      habitantes: '2',
      publicacion: '20/08/2017'
    },
    {
      nombre: 'Jorge Cardenas',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img5.jpg',
      intercambios: '1',
      habitantes: '7',
      publicacion: '10/01/2017'
    },
    {
      nombre: 'Pilar Corcho',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img6.jpg',
      intercambios: '1',
      habitantes: '3',
      publicacion: '09/03/2017'
    },
    {
      nombre: 'Aldemar Ome',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img8.gif',
      intercambios: '0',
      habitantes: '5',
      publicacion: '10/07/2017'
    },
    {
      nombre: 'Derly Araujo',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img9.jpg',
      intercambios: '10',
      habitantes: '3',
      publicacion: '13/06/2017'
    },
    {
      nombre: 'Jeronimo Castillo',
      // tslint:disable-next-line:max-line-length
      descripcion: 'El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.',
      img: 'assets/img/img10.jpg',
      intercambios: '5',
      habitantes: '2',
      publicacion: '14/04/2017'
    }
  ];

  constructor() {
    console.log('Servicio listo para usarse');
  }


  getAlojamientos() {
    return this.alojamientos;
  }
}
