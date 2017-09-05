import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Universidad } from '../../interfaces/universidad.interface';
import { UniversidadesService } from '../../services/universidades.service';
import { Usuario } from '../../interfaces/usuario.interface';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

 //formulario
 forma: FormGroup;
//Usuario
usuario:Usuario = {
  nombreCompleto:{
    nombres: "Diana Catalina",
    apellidos: "Cano Narvaez"
  },
  fechaNacimiento: new Date("February 4, 2016")
}


movilidades:  Object[]=[
  {
    duracion:"6 Meses",
  },
  {
    duracion:"12 Meses",
  }
]

universidades:Universidad[]=[];

  constructor(private _universidadesService:UniversidadesService, private router: Router) {

     }


    ngOnInit() {
      this.universidades=this._universidadesService.getUniversidades();
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

        'universidadOrigen': new FormControl(),
        'paisOrigen': new FormControl('',Validators.required),
        'universidadDestino': new FormControl(),
        'paisDestino': new FormControl('',Validators.required),
        'carrera': new FormControl('',Validators.required),
        'duracionMovilidad': new FormControl('',Validators.required),
        'contacto': new FormGroup(
      {
        'indicativo': new FormControl('',Validators.required),
        'telefono': new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]),
        'correo': new FormControl('',[Validators.required,Validators.pattern("^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$")])
      }
    )

    })

      this.forma.controls['universidadDestino'].setValidators([
        Validators.required,
        this.validarUniversidadDestino.bind( this.forma )

      ]),
      this.forma.controls['universidadOrigen'].setValidators([
        Validators.required,
        this.validarUniversidadOrigen.bind( this.forma )
      ])
    }

 validarUniversidadDestino(controlUniversidadDestino:FormControl):{[falla:string]:boolean}{
   let forma: any = this;
    if(controlUniversidadDestino.value === forma.controls['universidadOrigen'].value ){
      return {
        validarUniversidad:true
      }
    }
       return null;
     }

     validarUniversidadOrigen(controlUniversidadOrigen:FormControl):{[falla:string]:boolean}{
       let forma: any = this;
        if(controlUniversidadOrigen.value === forma.controls['universidadDestino'].value ){
          return {
            validarUniversidad:true
          }
        }
           return null;
         }

  guardarCambios():void{
    console.log(this.forma.value);
    console.log(this.forma);
    //console.log(this.forma.controls['movilidad.universidadOrigen'].value);
  }

  regresar(){
       this.forma.reset();
       this.router.navigate(['/landing']);
   }

   buscarPaisOrigen(){
     if(this.forma.get('universidadOrigen').valid){
       this.forma.get('paisOrigen').setValue(this._universidadesService.buscarPaisOrigen());
     }
     console.log(this.forma.get('universidadOrigen').value);
      //  console.log("llego"+arg);
    }



}
