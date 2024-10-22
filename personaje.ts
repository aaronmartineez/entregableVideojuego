/*Crear un sistema de personajes de un 
videojuego RPG utilizando herencia y 
polimorfismo. Los personajes tendrán 
características y habilidades únicas, y 
algunos podrán evolucionar a versiones 
mejoradas con nuevas habilidades.

El personaje debe tener atributos ej:
nombre (string): El nombre del personaje.
nivel (number): El nivel del personaje (empieza en 1).
puntosDeVida (number): Los puntos de vida del personaje.
Métodos ej:
atacar(): Imprime un mensaje indicando que el personaje 
está atacando.
defender(): Imprime un mensaje indicando que el personaje 
está defendiendo.
*/

export  class Personaje {
    protected nombre:string;
    public nivel:number;
    protected vida: number;
    protected daño: number;

    constructor(nombre:string, nivel:number = 1, vida:number, daño:number){
        this.nombre = nombre;
        this.nivel = nivel;
        this.vida = vida;
        this.daño = daño;
    }

    public atacar(): void {
        console.log(`${this.nombre} está atacando.`);
    }

    public curarse(): void {
        console.log(`${this.nombre} se está curando.`);
    }

    public ataqueEspecial(): void{
         console.log(`${this.nombre} realiza un ataque especial`);
    }

    public defensa(): void {
        console.log(`${this.nombre} bloquea ataque`);
        
    }

    public getNivel(): number {
        return this.nivel;
    }

    public setNivel(nivel:number): void{
        this.nivel = nivel ; 
    }
    
    public mostrarStats():void{
        console.log(`NOMBRE:${this.nombre} | NIVEL: ${this.nivel} | VIDA: ${this.vida} | DAÑO: ${this.daño}`);
    }

    public evolucionar(): void {
        console.log(`${this.nombre} ha evolucionado`);
                
        }
         
         
}