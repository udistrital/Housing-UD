import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

 //formulario
 forma: FormGroup;
//Usuario
usuario:Object = {
  nombreCompleto:{
    nombres: "Diana Catalina",
    apellidos: "Cano Narvaez"
  },
  fechaNacimiento:"2017-09-04"
}

universidades: Object[] = [
  {
    nombre: "Universidad Distrital Francisco José de Caldas",
    pais: "Colombia"
  },
  {
    nombre: "Universidad de la Plata",
    pais: "Argentina"
  },
  {
    nombre: "Universidad Nacional Autónoma de México",
    pais: "México"
  }
];

movilidades:  Object[]=[
  {
    duracion:"6 Meses",
  },
  {
    duracion:"12 Meses",
  }
]

carreras: Object[]=[
  {
    nombreCarrera:"Ingeniería de Sistemas",
  },
  {
    nombreCarrera:"Ingeniería Civil",
  },
  {
    nombreCarrera:"Ingeniería Industrial",
  },
]

  constructor(private router: Router) {
     }


    ngOnInit() {
      this.forma= new FormGroup({
      'nombreCompleto': new FormGroup(
        {
          'nombres': new FormControl('',[Validators.required, Validators.minLength(3)]),
          'apellidos': new FormControl('',[Validators.required, Validators.minLength(3)]),
        }
      ),
      'fechaNacimiento': new FormControl('',Validators.required),
      'sexo': new FormControl('',Validators.required),
      'sangre': new FormGroup (
        {
        'tipoSangre': new FormControl('',Validators.required),
        'rh': new FormControl('',Validators.required),
        }
    ),
    'talla': new FormGroup(
      {
        'altura': new FormControl('',[Validators.required,Validators.min(1),Validators.max(250)]),
        'peso': new FormControl('',[Validators.required,Validators.min(1),Validators.max(250)]),
      }
    ),
    'movilidad': new FormGroup(
      {
        'universidadOrigen': new FormControl('',Validators.required),
        'paisOrigen': new FormControl('',Validators.required),
        'universidadDestino': new FormControl('',Validators.required),
        'paisDestino': new FormControl('',Validators.required),
        'carrera': new FormControl('',Validators.required),
        'duracionMovilidad': new FormControl('',Validators.required),
      }
    ),
    'contacto': new FormGroup(
      {
        'indicativo': new FormControl('',Validators.required),
        'telefono': new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
        'correo': new FormControl('',[Validators.required,Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")])
      }
    )

    })
    }

  guardarCambios():void{
    console.log(this.forma.value);
    console.log(this.forma);

  }

  calcularEdad():number{
    //console.log(this.forma.get('nacimiento.fechaNacimiento').value);
      return Math.floor(Math.random() * 30) + 1 ;
  }

  regresar(){
       this.router.navigate(['/landing']);
   }



}
