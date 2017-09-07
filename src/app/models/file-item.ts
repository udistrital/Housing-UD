export class FileItem{

  public archivo:File;
  public nombreArchivo:string;
  public url:string='';
/*Si ya se subio el archivo o esta subiendo*/
  public estaSubiendo:boolean=false;
  public progreso:number=0;

constructor(archivo:File){
  this.archivo=archivo;
  this.nombreArchivo= archivo.name;
}
}
