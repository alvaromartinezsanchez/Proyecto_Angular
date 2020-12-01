import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform{

    transform(value: any){
        var espar = "es un numero impar"

        if (value % 2 == 0){
            espar = "es un numero par"
        }
        return "Año de estreno: " + value + " " + espar;
    }

}