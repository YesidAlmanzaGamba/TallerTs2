

export class Serie{
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    imagen:string;
    info:string;
    link:string;

   constructor(id: number, nombre: string, canal: string, temporadas: number, imagen: string, info: string, link: string){
       this.id = id;
       this.nombre = nombre;
       this.canal = canal;
       this.temporadas = temporadas;

       this.imagen  = imagen;
       this.info = info;
       this.link = link;
   }
}