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
    'nombre': new FormControl('Cris',Validators.required),
    'apellido': new FormControl('',Validators.required),
    'correo': new FormControl('',[Validators.required,Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")])
  }) }

  guardarCambios(){
    console.log(this.forma.value);
    console.log(this.forma);

  }

}
