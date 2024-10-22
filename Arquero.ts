import { Personaje } from "./personaje";


export class Arquero extends Personaje {
    private rafaga: number;
    
    
    constructor (nombre:string) {
        super(nombre,1,120,30);
        this.rafaga = 50;

        
    }

    public atacar(): void {
        console.log(`${this.nombre} Lanza una flecha con ${this.daño} puntos de daño.`);
    }

    public defensa(): void {
        console.log(`${this.nombre} bloquea ataque con disparo de flecha`);
        
    }

    public ataqueEspecial(): void {
        
        console.log(`${this.nombre} realiza un ataque especial con ${this.rafaga} puntos de daño `);
   
}
    


    evolucionar(): void {
        if (this.nivel >= 5) {
            
            console.log(`${this.nombre} ha evolucionado a CAZADOR!`);
        } else {
            console.log(`${this.nombre} necesita estar en el nivel 5 para evolucionar.`);
        }
    }
}

