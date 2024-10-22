import { Personaje } from "./personaje";

export class Guerrero extends Personaje {
    private impacto:number;
    
    
    constructor (nombre:string) {
        super(nombre,1,150,25);
        this.impacto = 90;
    }

    public atacar(): void {
        console.log(`${this.nombre} realiza un golpe critico con ${this.daño} puntos de daño.`);
    }

    public defensa(): void {
        console.log(`${this.nombre} bloquea ataque escudo de guerrero`);
        
    }

    public ataqueEspecial(): void {
        
        console.log(`${this.nombre} realiza un ataque especial con ${this.impacto} puntos de daño `);
   
}

   public evolucionar(): void {
    if (this.nivel >= 5) {
        
        console.log(`${this.nombre} ha evolucionado a CABALLERO!`);
    } else {
        console.log(`${this.nombre} necesita estar en el nivel 5 para evolucionar.`);
    }
}
}