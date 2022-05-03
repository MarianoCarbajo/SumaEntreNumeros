let num1: number;
let num2: number;

let suma: number = 0;
num1 = Number(prompt("Ingrese el primer número:"));
num2 = Number(prompt("Ingrese el segundo número:"));
if (num1 < num2) {
  for (let contador: number = num1; contador <= num2; contador++) {
    suma = suma + contador;
  }
} else if (num1 > num2) {
  for (let contador: number = num2; contador <= num1; contador++) {
    suma = suma + contador;
  }
}

console.log("La suma es: " + suma);
