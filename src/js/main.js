
console.groupCollapsed("Estrecturas de control")
console.groupCollapsed("if, else, if else-if")
console.log(8 < 10) // true

console.log("8" >= 6) // true

let hora = 13

if (hora > 8 && hora < 17) {
    console.info("Estoy en mi jornada laboral")
} else {
    console.warn("Ya salí de mi jornada laboral")
}

let mes = "abril"

if (mes == "enero") {
    console.log("es enero")
} else if (mes == "febrero") {
    console.log("es febrero")
} else if (mes == "marzo") {
    console.log("es marzo")
} else if (mes == "abril") {
    console.log("es abril")
} else if (mes == "mayo") {
    console.log("es mayo")
} else {
    console.log("mes fuera de rango")
}

// Practica 

let numMes = 5

if (numMes > 0 && numMes <= 3) {
    console.log("estas en el primer trimestre del año")
} else if (numMes > 3 && numMes <= 6) {
    console.log("estas en el segundo trimestre del año")
} else if (numMes > 6 && numMes <= 9) {
    console.log("estas en el tercer trimestre del año")
} else if (numMes > 9 && numMes <= 12) {
    console.log("estas en el cuarto trimestre del año")
} else {
    console.log("mes fuera de rango")
}

/* Desarrolla un algoritmo que muestre un menú de un restaurante y luego le presente al usuario estas opciones
[1] solicitar almuerzo
[2] solicitar domicilio
[3] cancelar orden
[4] finalizar el programa
*/

function pedidoIf() {
    let money = parseInt(prompt("¿Cuánto dinero tienes?"))
    let opction = parseInt(prompt(`prueba If
    Ingresa la opcion que deseas:

[1] solicitar almuerzo
[2] solicitar domicilio
[3] cancelar orden
[4] finalizar el programa
`))
    if (opction == 1 && money >= 20) {
        console.info("Preparando almuerzo...")
    } else if (opction == 2 && money >= 25) {
        console.info("Empacando domicilio...")
    } else if (opction == 3) {
        console.info("Cancelando pedido...")
    } else if (opction == 4) {
        let fin_program = console.info("Fue un gusto atenderte...")
        return fin_program
    } else if (opction < 1 || opction > 4) {
        console.warn("Ingresaste una opcion incorrecta, intentalo nuevamente...")
        pedidoIf()
    } else {
        console.warn("No tienes suficiente dinero, intenta nuevamente...")
        pedidoIf()
    }
}
// pedidoIf()
console.groupEnd()

console.groupCollapsed("Switch")
// opcion con switch ejercicio trimestre del año
switch (numMes) {
    case 1:
        console.info("estas en el primer trimestre del año")
        break
    case 2:
        console.info("estas en el primer trimestre del año")
        break
    case 3:
        console.info("estas en el primer trimestre del año")
        break
    case 4:
        console.info("estas en el segundo trimestre del año")
        break
    case 5:
        console.info("estas en el segundo trimestre del año")
        break
    case 6:
        console.info("estas en el segundo trimestre del año")
        break
    case 7:
        console.info("estas en el tercer trimestre del año")
        break
    case 8:
        console.info("estas en el tercer trimestre del año")
        break
    case 9:
        console.info("estas en el tercer trimestre del año")
        break
    case 10:
        console.info("estas en el tercer trimestre del año")
        break
    case 11:
        console.info("estas en el cuarto trimestre del año")
        break
    case 11:
        console.info("estas en el cuarto trimestre del año")
        break
    case 12:
        console.info("estas en el cuarto trimestre del año")
        break
    default:
        console.info("Ingrese un numero entre el 1 y el 12")
        break
}

/* Desarrolla un algoritmo que muestre un menú de un restaurante y luego le presente al usuario estas opciones
[1] solicitar almuerzo
[2] solicitar domicilio
[3] cancelar orden
[4] finalizar el programa
*/
function pedidoSwitch() {
    let money = 500
    let opction = parseInt(prompt(`Ingresa la opcion que deseas:

[1] solicitar almuerzo
[2] solicitar domicilio
[3] cancelar orden
[4] finalizar el programa
`))

    switch (opction) {
        case 1:
            if (money >= 20) {
                console.info("Preparando almuerzo...")
            } else {
                console.warn("No tienes suficiente dinero")
            }

            break
        case 2:
            console.info("Empacando domicilio...")
            break
        case 3:
            console.info("Cancelando pedido...")
            break
        case 4:
            console.info("Fue un gusto atenderte...")
            break
        default:
            console.warn("Ingresaste una opcion incorrecta, intentalo de nuevo...")
            pedido()
    }
}
// pedidoSwitch()
console.groupEnd()

console.groupCollapsed("ciclo for")
for (let i = 0; i <= 10; i++) {
    console.log(`Hola mundo nº${i}`)
}

// Imprimir las tablas de multiplicar 
for (let iT = 1; iT <= 10; iT++) {
    console.groupCollapsed(`Tabla del ${iT}`)
    for (let iM = 1; iM < 11; iM++) {
        console.log(`${iT} x ${iM} = ${iT * iM}`)
    }
    console.groupEnd()
}

//Ejemplo pideme perdon
for (let i = 0; i < 1000; i++) {
    console.log("Perdoname no volverá a suceder")
}
console.groupEnd()
console.groupCollapsed("ciclo while")
let i = 1
while (i <= 10) {
    console.log(`9 * ${i} = ${9 * i}`)
    i++
}

let limit = 10
let counter = 1

while (counter < limit) {
    console.log(counter);
    counter++
    limit = Math.floor(Math.random()*20)+1
} // ciclo while que nos imprime numeros de forma aleatoria hasta un limite que cambia constantemente
console.groupEnd()
console.groupEnd()