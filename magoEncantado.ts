
import { Mago } from "./mago";

export class MagoEncantado extends Mago{
    private encantamiento: string;

    constructor (nombre:string,nivel:number = 1,vida:number = 500,daño:number = 60 ){
        super(nombre);
        this.encantamiento = "hechizo de paralizacion";

    }
    public atacar(): void {
        console.log(`${this.nombre} realiza un hechizo con ${this.daño} de daño.`);


    }

    public ataqueEspecial(): void {
        console.log(`${this.nombre} realiza un ataque especial con ${this.encantamiento} puntos de daño `);
    }


    public defensa(): void {
        console.log(`${this.nombre} bloquea ataque con hechizo de defensa`);
        
    }

}
