import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[NgDropFiles]'
})
export class NgDropFilesDirective {

  //Necesito recibir los fotos
  @Input() foto:FileItem = null;
  @Output () sobreDrop:EventEmitter<any> = new EventEmitter();

  constructor( public elemento :ElementRef) { }


//Cuando paso algo sobre el Drop
  @HostListener('dragenter',['$event'])
    public onDragEnter(event:any){
      this.sobreDrop.emit(true);
    }

    //Cuando se libera el mouse
    @HostListener('dragleave',['$event'])
      public ondDragLeave(event:any){
        this.sobreDrop.emit(false);
      }

      //over
      @HostListener('dragover',['$event'])
        public onDragOver(event:any){
          let transferencia = this._getTransferencia( event );
          transferencia.dropEffect='copy';
          this._prevenirYDetener( event );
          this.sobreDrop.emit(true);
        }

        //Cuando se dropee un foto
        @HostListener('drop',['$event'])
        public onDrop(event:any){
          let transferencia = this._getTransferencia( event );
          if(!transferencia){
            return;
          }
          this._agregarfoto(transferencia.files);
          //Cuando soltermos el foto sobre la caja no lo recargue
          this._prevenirYDetener( event );

        }

        private _agregarfoto(foto:File){

          if(this._fotoPuedeSerCargada(foto)){
            let nuevofoto = new FileItem(foto);
          }
          console.log(foto);
        }

        private _getTransferencia(event:any){
          return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
        }
        private _fotoPuedeSerCargada(foto:File){
          if(this._esImagen(foto.type)){
            return true;
          }
          return false;
        }


        private _prevenirYDetener( event:any){
          event.preventDefault();
          event.stopPropagation();
        }

        private _esImagen (tipoArchivo:string):boolean{

          if(tipoArchivo == ' ' || tipoArchivo== undefined){
            return false;
          }else{
            return tipoArchivo.startsWith("image");
          }
        }

}
