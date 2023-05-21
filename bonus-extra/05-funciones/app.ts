function sumar(a: number, b: number): number {
    return a + b;
}
let suma = sumar(5, 5);
console.log("suma", suma);

function sumar2(a: number, b: number): (c: number) => number {
    return function (c:number) {
        return a + b + c;
    }
}
let suma1 = sumar2(5, 5)(5);
console.log(suma1);

