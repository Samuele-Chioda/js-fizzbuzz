// stampo i numeri da 1 a 100
for (let x = 1; x <= 100; x++) {
// controllo i multipli di entrambi
    if (x % 3 === 0 && x % 5 === 0)
        console.log("FizzBuzz");
// controllo multipli di 3
    else if (x % 3 === 0)
        console.log("Buzz");
// controllo multipli di 5
    else if (x % 5 === 0)
    console.log("Fizz");
// stampo il numero normale se non è multiplo di 5 e 3
    else(console.log(x));
}

const outputDiv = document.getElementById("container");
for (let x = 1; x <= 100; x++) {
    const elemento = document.createElement("p");
    if (x % 3 === 0 && x % 5 === 0) {
        elemento.textContent = "FizzBuzz";
        outputDiv.appendChild(elemento);
    } else if (x % 3 === 0) {
        elemento.textContent = "Buzz"; 
        outputDiv.appendChild(elemento);
    } else if (x % 5 === 0) {
        elemento.textContent = "Fizz"; 
        outputDiv.appendChild(elemento);
    } else {
        elemento.textContent = x;
        outputDiv.appendChild(elemento);
    }
}





