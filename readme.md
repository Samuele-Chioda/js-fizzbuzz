Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS 1:
Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz. Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.


1 stampo numeri da 1 a 100
2 verifico i multipli di 3 (divido il numero per 3 e controllo il resto, se è 0, il numero è multiplo di 3)
3 verifico i multipli di 5 (divido il numero per 5 e controllo il resto, se è 0 allora il numero è multiplo di 5)
4 verifico i multipli di 3 e 5 (verifico se il numero da uno a 100 sia multiplo sia di 3 che di 5 dividendolo per essi, poi usando && controllo che entrambe le condizioni siano true)
5 stampo risultato in console 


(prima verifico il punto 4 poi il punto 3 e 2)*