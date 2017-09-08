import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from "@angular/router";
import { Universidad } from '../../interfaces/universidad.interface';
import { UniversidadesService } from '../../services/universidades.service';
import { Usuario } from '../../interfaces/usuario.interface';
import { FileItem } from '../../models/file-item';

@Component({
  selector: 'app-formulario-usuarios',
  templateUrl: './formulario-usuarios.component.html',
  styleUrls: ['./formulario-usuarios.component.css']
})
export class FormularioUsuariosComponent implements OnInit {

  //Controlar esta en el DropZone
  estaSobreDropzone:boolean=false;
  permiteCargar:boolean=true;
  foto:FileItem=null;

 //formulario
 forma: FormGroup;
//Usuario Estructura que debe tener la interface usuario
usuario:any = {
  nombreCompleto:{
    nombres: "Diana Catalina",
    apellidos: "Cano Narvaez"
  },
  fechaNacimiento: new Date("February 4, 2016"),
  sexo:"Femenino",
  sangre:{
    tipoSangre:"O",
    rh:"+"
  },
  talla:{
    altura:"150",
    peso:"50"
  },
  universidadOrigen:"UD",
  paisOrigen:"Colombia",
  ciudadOrigen:"Bogota",
  //universidadesDestino:["Universidad 1", "Universidad 2","Universidad 3"],
  carrera:"Ingeniería de Sistemas",
  duracionMovilidad:"12 Meses",
  contacto:{
    indicativo:"+57",
    telefono:"123343545",
    correo:"jakdjask@jkds.com"
  },
  img:"assets/sdjkas.jpg"
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

        'universidadOrigen': new FormControl('',Validators.required),
        //'paisOrigen': new FormControl('',Validators.required),
        //'ciudadOrigen': new FormControl('',Validators.required),
        'universidadesDestino': new FormArray([
          new FormControl('',Validators.required),
        ]),

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
/*
      this.forma.controls['universidadDestino'].setValidators([
        Validators.required,
        this.validarUniversidadDestino.bind( this.forma )

      ]),
      this.forma.controls['universidadOrigen'].setValidators([
        Validators.required,
        this.validarUniversidadOrigen.bind( this.forma )
      ])*/
    }

archivoSobreDropZone(e:boolean){
  console.log(e);
  this.estaSobreDropzone=e;
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
       /*let forma: any = this;
        if(controlUniversidadOrigen.value === forma.controls['universidadDestino'].value ){
          return {
            validarUniversidad:true
          }
        }*/
           return null;
         }


  agregarUniversidadDestino(index:number){
    console.log("llego y tamanio"+ index);
  if(index==0|| index <=2){
    (<FormArray>this.forma.controls['universidadesDestino']).push(
      new FormControl('',Validators.required)
    )
  }

  }

  eliminarUniversidadDestino(){
     (<FormArray>this.forma.controls['universidadesDestino']).controls.pop();
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

    cargarFoto(){
      this.permiteCargar=false;
    }

    limpiarFoto(){

      this.foto=null;
      this.permiteCargar = true;
    }

}
