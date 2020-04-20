//Variables
let nombreVariable = 10  //Numero
let booleano = true //Boleano
let tipoFlotante = 1.557979 //Float
let strings = "Texto b  skjhsshoisosis oisuosiuosi " //String 

//console.log(nombreVariable)

// const , var , let

// var nombre = "Juan"
// let nombre2 = "Pedro"

// console.log(nombre)

// function nombre1(){
//     let nombre = "Pikachu"
//     console.log(nombre)
// }
// nombre1()
// console.log(nombre)


let carro = {
    //Atributos o propiedades
    puertas: 4,
    llantas: 4,
    motor: "1.4",
    marca: "Nissan",
    modelo: "Versa 2020",
    llantaRefaccion: false,
    color: "Rojo",
    //Metodos
    acelerar(destino) {
        console.log("Acelerando.... hacia...", destino)
    },
    girarAlaDerecha() {
        console.log("Girando a la derecha...")
    }
}

//carro.acelerar("A las vegas")

// console.log("Ejercicio de objetos")

//  carro.acelerar()
//  carro.girarAlaDerecha()

// console.log("Ejercicio de listas")

let frutas = ["melón", "papaya", "pera", "manzana", "Sandia"]
let numeros = [1, 2, 3, 4, 5, 6, 7]

// console.log(frutas)
// console.log(numeros)


// console.log(frutas[1])
// console.log(numeros[2])

// console.log(frutas.length)



//console.log("Fuera de la funcion")

function saludar(nombre) {

    console.log("Hola! ", nombre)
}

function despedida(nombre) {
    console.log("Adios ", nombre)
}

function suma(numero1, numero2) {
    let resultado = numero1 + numero2
    console.log(resultado)
    return resultado
}

//saludar()

let arary = {
    suma(n1, n2) {
        return n1 + n2
    },
    restar(n1, n2) {
        return n1 - n2
    },
    multiplicar(n1, n2) {
        return n1 * n2
    }
}


// console.log( calculadora.multiplicar(1,2) )
// console.log( calculadora.restar(2,1) )
// console.log( calculadora.suma(1,2) )


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100]

// contador se inicializa
// condicion
// incremento



// for (let contador = 0; contador < array.length; contador = contador + 1) {
//     //Ejecutas esto
//     console.log(array[contador])
// }


function saludar(nombre, i) {
    console.log(`Hola ${nombre} estoy en la posicion ${i}`)
}

const listaNombres = ["Juan", "Ramon", "Andrea", "Samantha", "Pedro", "Julio"]

for (let i = 0; i < listaNombres.length; i++) {
    saludar(listaNombres[i], i)
}

//Ciclo que imprima los numeros del 1 -100 


//ciclo que imprima los nombres del una lista de 10 elementos



//Ciclo que imprima los numeros pares de entre 1-100

// que es el modulo y residuo y el if