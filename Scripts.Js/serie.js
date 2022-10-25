

var Serie = /** @class */ (function () {

    function Serie(id, nombre, canal, temporada,imagen,info,link) {

        this.id = id;

        this.nombre = nombre;

        this.canal = canal;
        
        this.temporada = temporada;

        this.info=info;

        this.imagen= imagen;

        this.link=link;


    }

    return Serie;
    
}());


export { Serie };