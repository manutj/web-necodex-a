class Personaje {
    //PROPIEDADES
    nombre; //undefined
    #nombrePrivado
    tipo = 'villano';
    vidas = 5;
    energia = 10;

    constructor(nombrePrivado, nombre, tipo, atacar){
        this.#nombrePrivado = nombrePrivado
        this.nombre = nombre
        this.tipo = tipo
        this.Atacar = atacar
    }

    // METODOS
    Saludo () {
        // return `Hola, ${this.#nombrePrivado} `
       return this.#nombrePrivado = 'Yoshi'
    }

    Saltar(param){
        if(param)
        return 'Saltando...'
    }
    Correr(){
        return 'Corriendo...'
    }
    Atacar(){
        return 'Atacando...'
    }
}


const mario = new Personaje('Mario', 'Heroe', ()=>{return 'Atacando doblemente'})
//console.log(mario.nombre, mario.tipo, mario.Atacar(), mario.saltar(true))
mario.nombre = 'Doctor Mario'
//console.log(mario.nombre)

const luigi = new Personaje('Luigi')
console.log(luigi.Saludo())
// console.log(luigi.#nombrePrivado)
// luigi.#nombrePrivado = 'Yoshi'


const bowser = new Personaje('Koopa', 'Villano', ()=>{return 'Atacando doblemente'})



