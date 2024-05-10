// stampo i numeri da 1 a 100
for (let x = 1; x <= 100; x++) {
    // controllo i multipli di entrambi
    if (x % 3 === 0 && x % 5 === 0)
        console.log("fizzBuzz")
// controllo multipli di 3
    else if (x % 3 === 0)
        console.log("buzz");
// controllo multipli di 5
    else if (x % 5 === 0)
    console.log("fizz");
    
    else(console.log(x))
}

const elementoH1 = document.getElementById("#elemento")

