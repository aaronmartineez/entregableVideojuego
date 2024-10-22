import {Personaje} from "./personaje";
import {Arquero} from "./Arquero";
import {Guerrero} from "./guerrero";
import {Mago} from "./mago";
import {Cazador} from "./cazador";
import {Caballero} from "./caballero";
import {MagoEncantado} from "./magoEncantado";    

//DECLARO PERSONAJES
const guerrero = new Guerrero("WARRIOR");
const mago = new Mago("WIZRD");
const arquero = new Arquero("ROBIN");
const caballero = new Caballero("KNIGHT");
const magoEncantado = new MagoEncantado("WIZRD");



//VISTA EN CONSOLA DEL NIVEL INICIAL Y ESTADISTICAS DE PERSONAJE ARQUERO (ejemplo funcionamiento de personaje)
arquero.mostrarStats();

//ATAQUE | DEFENSA | CURACION 
arquero.atacar();
arquero.curarse();
arquero.defensa();
arquero.ataqueEspecial();

//AUMENTO DE NIVEL PARA EJECUTAR EVOLUCION Y MUESTRO EN CONSOLA
arquero.setNivel(6);
arquero.evolucionar();

//EVOLUCION DE "ARQUERO" A "CAZADOR" ESTADISTICAS
const cazador = new Cazador("HUNTER");

//VISTA EN CONSOLA DEL NIVEL INICIAL Y ESTADISTICAS (fin del ejemplo personaje)
cazador.mostrarStats();

console.log("--- ATAQUE | DEFENSA | CURACION --- ")
cazador.atacar();
cazador.curarse();
cazador.defensa();
cazador.ataqueEspecial();

console.log("--- EVOLUCIONES ---");
mago.setNivel(6);
mago.evolucionar();
guerrero.setNivel(6);
guerrero.evolucionar();

console.log("---- ATAQUES ESPECIALES ----");
mago.ataqueEspecial();
guerrero.ataqueEspecial();
arquero.ataqueEspecial();
magoEncantado.ataqueEspecial();
caballero.ataqueEspecial();

console.log("--- ESTADISTICAS ---");
mago.mostrarStats();
guerrero.mostrarStats();
magoEncantado.mostrarStats();
caballero.mostrarStats();







