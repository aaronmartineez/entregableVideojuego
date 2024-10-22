import { Guerrero } from "./guerrero";



export class Caballero extends Guerrero {
    private golpeCaballero: number;
    
    
    constructor (nombre:string,nivel:number = 1,vida:number = 300,daño:number = 100) {
        super(nombre);
        this.golpeCaballero = 200;
    }

    public atacar(): void {
        console.log(`${this.nombre} realiza un golpe critico con ${this.daño} puntos de daño.`);
    }

    public ataqueEspecial(): void {
        console.log(`${this.nombre} realiza un ataque especial con ${this.golpeCaballero} puntos de daño `);
    }

    public defensa(): void {
        console.log(`${this.nombre} bloquea ataque con armadura de caballero`);
        
    }
}