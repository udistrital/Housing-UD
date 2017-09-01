import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent  {

 //formulario
 forma: FormGroup;

  constructor() {
    this.forma= new FormGroup({
    'nombres': new FormControl('Cris'),
    'apellidos': new FormControl(),
    'edad': new FormControl(),
  }) }

  guardarCambios(){

  }

}
