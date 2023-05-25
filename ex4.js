// https://www.w3schools.com/react/react_es6_destructuring.asp

// Operador de desestructuración

function tempMinMax() {
    return [-1, 20];
}

let temp = tempMinMax();
let tempMin = temp[0];
let tempMax = temp[1];

console.log(tempMin, tempMax); // Funciona, forma ES5

// Reescribe el código de arriba usando ES6

/* function tempMinMax(a, b) {
    const tempDestructMin = a;
    const tempDestructMax = b;

    return [tempDestructMin, tempDestructMax];
}

const [tempDestructMin, tempDestructMax] = tempMinMax(-1, 20);

console.log(tempDestructMin, tempDestructMax); */

// TODO: Usa el operador de destrcturación para asignar el valor de la primera posición del array a tempDestructMin, y la segunda posición del array a tempDesustructMax

let [tempDestructMin, tempDestructMax] = tempMinMax();

console.log(tempDestructMin, tempDestructMax) // -1 20


