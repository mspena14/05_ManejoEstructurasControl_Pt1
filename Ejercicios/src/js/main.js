console.groupCollapsed("Ejercicios con Condicionales en JavaScript")
// Ejercicios con Condicionales en JavaScript
console.group("Ejercicio 1")
// 1. Verifica si un número es positivo.
let num1 = 5
console.log(num1)  
if (Math.sign(num1) == 1) {
    console.log("Es positivo")
}  
console.groupEnd()

console.group("Ejercicio 2")
// 2. Verifica si un número es negativo.
let num2 = -5
console.log(num2)
if (Math.sign(num2) == -1) {
    console.log("Es negativo")
}
console.groupEnd()

console.group("Ejercicio 3")
// 3. Comprueba si un número es par.
let num3 = Math.round(Math.random() *100)
console.log(num3)
if (num3 % 2 === 0) {
    console.log("Es par")
} else { console.log("No es par") 
}
console.groupEnd()

console.group("Ejercicio 4")
// 4. Comprueba si un número es impar.
let num4 = Math.round(Math.random() * 100)
console.log(num4)

if (num4 % 2 !== 0) {
    console.log("Es impar")
} else { console.log("No es impar") 
}
console.groupEnd()

console.group("Ejercicio 5")
// 5. Determina si un número es múltiplo de 5.
let num5 = Math.floor(Math.random() *100)

if (num5 % 5 === 0) {
    console.log("Es múltiplo de 5")
} else { console.log("No es múltiplo de 5") 
}
console.groupEnd()

console.group("Ejercicio 6")
// 6. Verifica si un número es divisible entre 3.
// Lo mismo de los puntos anteriores, pero intentemos con otra lógica
let num6 = Math.floor(Math.random() *100)

console.log(num6)
while (num6 % 3 == 0) {
    console.log("Es divisible entre 3")
    break
}

while (num6 % 3 != 0) {
    console.log("No es divisible entre 3")
    break
}
console.groupEnd()

console.group("Ejercicio 7")
// 7. Determina si un número es mayor que 100.
let num7 = Math.round(Math.random() * (200 - 1)) + 1

console.log(num7)
if (num7 > 100) {
    console.log("Es mayor que 100")
} else { console.log("No es mayor que 100") 
}
console.groupEnd()

console.group("Ejercicio 8")
// 8. Verifica si un número es menor que -50.
let num8 = Math.floor(Math.random() *(-100 - 0)) + 0
console.log(num8)

if (num8 < -50) {
    console.log("Es menor que -50")
} else { console.log("No es menor que -50") 
}
console.groupEnd()

console.group("Ejercicio ")
// 9. Comprueba si un número está en el rango de 20 a 50.
let num9 = Math.ceil(Math.random() *100)

console.log(num9)
if (num9 >= 20 && num9 <=50) {
    console.log(`${num9} está entre 20 y 50`)
} else { console.log(`${num9} no está entre 20 y 50`) 
}
console.groupEnd()

console.group("Ejercicio 10")
// 10. Determina si un número es igual a 0.
let num10 = Math.floor(Math.random() *(-5 - 5)) + 5

console.log(num10)
if (num10 == 0) {
    console.log("Es igual a 0")
} else { console.log("No es igual a 0") 
}
console.groupEnd()

console.group("Ejercicio 11")
// 11. Verifica si un número es mayor que -10 y menor que 10.
console.groupEnd()

console.group("Ejercicio ")
// 12. Determina si un número es un año bisiesto.
console.groupEnd()

console.group("Ejercicio ")
// 13. Verifica si una persona es mayor de edad (mayor o igual a 18 años).
console.groupEnd()

console.group("Ejercicio ")
// 14.
console.groupEnd()

console.group("Ejercicio ")
// 15. Verifica si un número es un cuadrado perfecto.
console.groupEnd()

console.group("Ejercicio ")
// 16. Determina si un número es un número de Fibonacci.
console.groupEnd()

console.group("Ejercicio ")
// 17. Verifica si un número es una potencia de 2.
console.groupEnd()

console.group("Ejercicio ")
// 18. Determina si un número es un palíndromo.
console.groupEnd()

console.group("Ejercicio ")
// 19. Verifica si una cadena de texto contiene la palabra "JavaScript".
console.groupEnd()

console.group("Ejercicio ")
// 20. Determina si una cadena tiene más de 10 caracteres.
console.groupEnd()

console.group("Ejercicio ")
// 21. Verifica si una cadena de texto está en minúsculas.
console.groupEnd()

console.group("Ejercicio ")
// 22. Determina si una cadena de texto contiene al menos un número.
console.groupEnd()

console.group("Ejercicio ")
// 23. Verifica si una cadena de texto termina con un punto (.).
console.groupEnd()

console.group("Ejercicio ")
// 24. Determina si una cadena de texto es un pangrama (contiene todas las letras del alfabeto).
console.groupEnd()

console.group("Ejercicio ")
// 25. Verifica si un día de la semana es laborable (de lunes a viernes).
console.groupEnd()

console.group("Ejercicio ")
// 26. Determina si un día es fin de semana (sábado o domingo).
console.groupEnd()

console.group("Ejercicio ")
// 27. Verifica si un número representa un mes válido (del 1 al 12).
console.groupEnd()

console.group("Ejercicio ")
// 28. Determina si una hora está en el rango de 9 AM a 6 PM.
console.groupEnd()

console.group("Ejercicio ")
// 29. Verifica si una persona es mayor de 65 años o menor de 18 años.
console.groupEnd()

console.group("Ejercicio ")
// 30. Determina si un triángulo es equilátero (tres lados iguales).
console.groupEnd()

console.group("Ejercicio ")
// 31. Verifica si un triángulo es isósceles (dos lados iguales).
console.groupEnd()

console.group("Ejercicio ")
// 32. Determina si un triángulo es escaleno (todos los lados diferentes).
console.groupEnd()

console.group("Ejercicio ")
// 33. Verifica si un número es mayor que el doble de otro número.
console.groupEnd()

console.group("Ejercicio ")
// 34. Determina si la suma de dos números es mayor que 100.
console.groupEnd()

console.group("Ejercicio ")
// 35. Verifica si la resta de dos números es menor que 50.
console.groupEnd()

console.group("Ejercicio ")
// 36. Determina si un número es el doble del otro número.
console.groupEnd()

console.group("Ejercicio ")
// 37. Verifica si el doble de un número es igual al triple de otro número.
console.groupEnd()

console.group("Ejercicio ")
// 38. Determina si la suma de dos números es igual a 50.
console.groupEnd()

console.group("Ejercicio ")
// 39. Verifica si el producto de dos números es mayor que 500.
console.groupEnd()

console.group("Ejercicio ")
// 40. Determina si la división de dos números es menor que 10.
console.groupEnd()
console.groupEnd()

