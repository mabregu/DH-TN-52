console.log("Vinculacion externa");
// object window
console.log("window", window);
// object document
console.log("document", document);
// selector
let h1 = document.querySelector('h1');
h1.innerText = "Nuevo mensaje";

let p1 = document.querySelector('#p1');
let p2 = document.querySelectorAll('.p2');
let p = document.querySelectorAll('p');

p.forEach(pa => {
    pa.style.color = "cyan";
})

p1.style.color = "red";