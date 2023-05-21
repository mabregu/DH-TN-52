// type Person = {
//     name: string;
//     age?: number; // ? este es opcional
// }

// let persona1 = {
//     name: 12,
//     age: "30"
// }

// let persona2: Person = {
//     name: "Jon",
//     // age: "30"
// };

interface IPerson {
    name: string;
    age: number;
    sayHello: () => string;
}

let persona3: IPerson = {
    name: "Pepe",
    age: 25,
    sayHello() {
        return `Hola soy ${this.name}`
    }
}