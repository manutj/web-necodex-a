// class Personaje {
//     //PROPIEDADES PUBLICAS
//     nombre; //undefined
//     tipo = 'villano';
//     vidas = 5;
//     energia = 10;

// }

// class Personaje {
//     //PROPIEDADES PRIVADAS
//     #nombre; //undefined
//     #tipo = 'villano';
//     #vidas = 5;
//     #energia = 10;
// }

// class Personaje {
//     //METODOS PUBLICOS
//     Saltar(param){
//         if(param)
//         return 'Saltando...'
//     }
   
//     Atacar(){
//         return 'Atacando...'
//     }
// }

// class Personaje {
//     //METODOS PRIVADOS
//     #Correr(){
//         return 'Corriendo...'
//     }
//     Atacar(){
//         return this.#Correr() //Necesitamos de un metodo publico para ejecutar un metodo privado
//     }
// }


//INSTANCIAS Y CONSTRUCTOR DE CLASES

class Personaje {
    #NombrePrivado;
    nombre; 
    tipo = 'villano';
    vidas = 5;
    energia = 10;

    constructor(nombreprivado, nombre, tipo, atacar){
        this.#NombrePrivado = nombreprivado
        this.nombre = nombre
        this.tipo = tipo
        this.Atacar = atacar
        //console.log('Vidas' + this.vidas)
    }

    // Saludo () {
    //     // return `Hola, ${this.#nombrePrivado} `
    //    return this.#nombrePrivado = 'Yoshi'
    // }

    MostrarNombrePrivado(param){
        if(param)
        return this.#NombrePrivado
    }
    #Correr(){
        return 'Corriendo...'
    }
    Atacar(){
        return this.#Correr()
    }
}
const mario = new Personaje('Jose','Mario', 'Heroe', ()=>{return 'Atacando doblemente'})
const luigi = new Personaje(null,'Luigi', 'Heroe', ()=>{return 'Atacando doblemente'})
// console.log(mario.nombre)
// console.log(mario.MostrarNombrePrivado(true))
// console.log(mario.Atacar())
// console.log(luigi.nombre)
// console.log(luigi.Atacar())




// METODOS ESTATICOS
// class Animal {
//     static hablar(){
//         return 'Meeeh estatico directamente desde la clase'
//     }
//      hablar(){
//          return 'Meeeh no estatico desde la instanciade la clase'
//      }
// }

// console.log(Animal.hablar())
// const oveja = new Animal()
// console.log(oveja.hablar())





//INICIALIZACION ESTATICA
// class Animal {
//     nombre = 'jorge';
//     edad = 25;


//     static {
//         console.log('Bloque inicializado')
//        console.log(this.nombre)
        
//     }

//     constructor(){
//         console.log('Constructor inicializado')
//         console.log(this.nombre)
      
//     }
     
// }


// const animal = new Animal()



//HERENCIA


//SUPERCLASE (CLASE PADRE)

//FIGURA GEOMETRICA (FORMA, TIENE CARACTERISTICAS QUE SON COMUNES PARA TODAS LAS FORMAS EXISTENTES, COMO CUADRADOS, TRINGULOS, CIRCULOS, ETC... ESTAS CARACTERISTICAS PUEDEN SER EL COLOR, EL GROSOR DE LOS BORDES, EL DEGRADADO INTERNO, ETC...)


//SUBCLASES (CLASES HIJAS)

//EL CUADRADO TENDRA UNA PROPIEDAD "LADO"

// EL CIRCULO TRANDRA UNA PROPIEDAD RADIO Y OTRA DIAMETRO

// EL TRIANGULO UNA PROPIEDAD BASE Y OTRA ALTURA


// class Forma {
//     tipo = 'geometrica'
//     color = 'naranja'
//     constructor(){
//         console.log('Soy una forma geometrica')
//     }

//     show(){
//         console.log(`Soy una forma ${this.tipo} de color ${this.color}`)
//     }

//     setColor(color){
//         this.color = color
//     }
// }


// class Cuadrado extends Forma {
//     tipo = 'Cuadrada'
//     lados = 4
//     constructor(){
//         super()
//         console.log('Constructor del hijo finalizado')
//     }

//     mostrarLados(){
//         return this.lados
//     }
// }

// const cuadrado1 = new Cuadrado()
// cuadrado1.show()
// cuadrado1.setColor('amarillo')
// cuadrado1.show()




class Libro {
    titulo;
    autor;
    precio;
    constructor(titulo, autor, precio){
        this.titulo = titulo
        this.autor = autor
        this.precio = precio
    }

    get tituloLibro(){
        return this.titulo
    }

    set tituloLibro(titulo) {
        this.titulo = titulo
    }

    get autorLibro(){
        return this.autor
    }

    set autorLibro(autor) {
        this.autor = autor
    }

    mostrarMensaje(){
        return 'Hola mundo...'
    }

}

class Comic extends Libro {
    ilustrador = []
constructor(titulo, autor, precio, ilustrador){
    super(titulo, autor, precio)
    this.ilustrador = ilustrador
}

get ilustradorLibro(){
    return this.ilustrador
}

 agregarIlustradorLibro(ilustrador = []){
    this.ilustrador.push(ilustrador)
}

}

class Carrito {
    productos;
    constructor(){
        this.productos = []
    }

  

    agregarProducto(cantidad, precio){
        this.productos.push(...Array(cantidad).fill(precio))
    }

    mostrarProductos(){
        console.log(this.productos)
    }

    calculartotal(){
        return this.productos.reduce((acumulador, valorActual) => acumulador + valorActual).toFixed(2)
    }

    imprimirTicket(){
       console.log(`El total a pagar es $${this.calculartotal()}`) 
    }
}


const libro1 = new Libro('El hijo olvidado', 'Santiago Mikel', 22.90)
const libro2 = new Libro('Las hijas de la criada', 'Onega Sonsoles', 22.90)
const comic1 = new Comic('Batman, victoria oscura', 'Jeph Loeb', 20, ['Tim Sale'])
const carrito = new Carrito
libro1.tituloLibro = 'La sociedad de la nieve'
libro1.autorLibro = 'Pablo Vierci'
// console.log(libro1.tituloLibro)
// console.log(libro1.precio)

// console.log(libro2.titulo)
// console.log(libro2.autor)
// console.log(libro2.precio)


//console.log(comic1)
//console.log(comic1.autorLibro)
comic1.agregarIlustradorLibro('Frank miller')
comic1.agregarIlustradorLibro('Dick Giordano')
//console.log(comic1.ilustradorLibro)

carrito.agregarProducto(2, comic1.precio)
carrito.agregarProducto(3, libro1.precio)
carrito.mostrarProductos()
carrito.imprimirTicket()











