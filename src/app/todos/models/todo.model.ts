export class Todo{
  private id:number;
  private texto:string;
  private completado:boolean;

  constructor(_texto:string){
    this.id = new Date().getTime();
    this.texto = _texto;
    this.completado = false;
  }
}
