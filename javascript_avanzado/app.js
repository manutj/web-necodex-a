//JAVASCRIPT RUNTIME

//thread ==> Hilo de ejecucion principal, en Javascript solo puede ejecutarse una cosa a la vez 


// Callstack => pila de ejecucion de tareas

// Callback queue => cola de ejecucion de tareas callback que pueden demorarse en tener una respuesta

// Web api => metodos y propiedades que pertenecen al navegador que para javascript tambien son asincronas y son enviadas al callback queue al momento de ejecutarse

//La union de estas partes forman el runtime de javascript, a este flujo entre codigo sincrono y asincrono se le conoce como Event Loop


console.log("1") // Se envia al callstack y se ejecuta sincronicamente
console.log("2") // Se envia al callstack y se ejecuta sincronicamente
setTimeout(()=>{
    console.log("3")  // Se envia al callstack, pero al ser asincrono lo envia al callback queue y espera una respuesta, lo delega a un thread o hilo de ejecucion diferente, para no detener el thread principal
}, 3000)
console.log("4") // Se envia al callstack y se ejecuta sincronicamente

//EL Event Loop, revisa el callstack y el queue y unicamente si el callstack ya esta vacio, va a verificar si hay una respuesta en el callback queue, si la hay, la devuelve y si no, sigue esperando la respuesta



console.log("1")
setTimeout(()=>{
    console.log("2")
}, 1000)
//for (let i = 0; i < 99999999; i++) // Tener cuidado de no bloquear al callstack con tareas muy pesadas
console.log("3")



const ejemploCallback = (callback) => {
    callback(3,5)
}

let multiplicacion = (a,b) => {
    console.log(a*b)
}

let suma = (a,b) => {
    console.log(a+b)
}

let resta = (a,b) => {
    console.log(a-b)
}

let division = (a,b) => {
    console.log(a/b)
}

ejemploCallback(resta)


let usuarios = [{nombre:'Daniel', edad:30}, {nombre:'Manuel', edad:25}, {nombre:'Kevin', edad:17},{nombre:'Glenda', edad:21},{nombre:'Alan', edad:16}]


let registarUsuarios = (usuarios, callbackSuccess, callbackError)=>{
for (let index = 0; index < usuarios.length; index++) {
    if(usuarios[index].edad > 18){
        callbackSuccess(usuarios[index])
    }else{
        callbackError(usuarios[index])
    }
}
}

let exito = (usuario) => {
    console.log(`Registro de ${usuario.nombre} exitoso`)
}

let error = (usuario) => {
    console.log(`Error, no pudimos registrar a ${usuario.nombre}`)
}


registarUsuarios(usuarios, exito, error)