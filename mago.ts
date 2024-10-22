import { Personaje } from "./personaje";

export class Mago extends Personaje {
    private ilusion:number;
    
    
    constructor (nombre:string) {
        super(nombre,1,250,30);
        this.ilusion= 85;
    }

    public atacar(): void {
        console.log(`${this.nombre} realiza un hechizo con ${this.daño} de daño.`);
    }

    public defensa(): void {
        console.log(`${this.nombre} bloquea ataque con hechizo de humo`);
        
    }

    public ataqueEspecial(): void {
        
        console.log(`${this.nombre} realiza un ataque especial con ${this.ilusion} puntos de daño `);
   
}

public evolucionar(): void {
    if (this.nivel >= 5) {
        
        console.log(`${this.nombre} ha evolucionado a MAGO ENCANTADO!`);
    } else {
        console.log(`${this.nombre} necesita estar en el nivel 5 para evolucionar.`);
    }
}
}

