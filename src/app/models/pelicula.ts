export class Pelicula {

    /* Opcion 1
    public title: string;
    public year: number;
    public image: string;

    constructor(title, year, image){
        this.title = title;
        this.year = year;
        this. image = image;
    }
    */
    //Opcion 2 Funciona Igual que opcion 1 pero simplificado
    constructor(public title: string, public year: number, public image: string){}
}