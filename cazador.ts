import { Arquero } from "./Arquero";

export class Cazador extends Arquero{
    private  flechaDoble:number; 


    constructor (nombre:string,nivel:number = 1,vida:number = 240,daño:number = 60 ){
        super(nombre);
        this.flechaDoble = 120;

    }
    public atacar(): void {
        console.log(`${this.nombre} realiza un hechizo con ${this.daño} de daño.`);


    }
    public ataqueEspecial(): void {
        
            console.log(`${this.nombre} realiza un ataque especial con ${this.flechaDoble} puntos de daño `);
       
    }

    public defensa(): void {
        console.log(`${this.nombre} bloquea ataque con destreza de cazador`);
        
    }

    
}