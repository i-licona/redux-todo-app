export class Todo{
  public id:number;
  public texto:string;
  public completado:boolean;

  constructor(_texto:string){
    this.id = Math.random();
    this.texto = _texto;
    this.completado = false;
  }
}
