// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// 1. l'utente sceglie se pari o dispari
 let userChoise = prompt('Scegli, pari o dispari');

 // 2. l'utente inserisce un numero da 1 a 5 
 let userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

 // 3. genero numero casuale da 1 a 5 con il math.random
 function randomNumber(minNum, maxNum) {
    const result = Math.floor(Math.random() * ((maxNum + 1) - minNum)) + minNum;
    return result;
}

// 4. creo variabile per numeri casuali da assegnare al punteggio della macchina (machineNumber)
let machineNumber = randomNumber(1,5);

// 5. sommo i due numeri (numero scelto dall'utente + numero casuale della macchina)
const total = userNumber + machineNumber;

//6. creo funzione per controllare se la somma è pari/dispari
// se il num è pari (modulo di 2) --> return come true (0)
function isPari (num) {
    return num % 2 === 0;
}

// 7. verifico se il pari/dispari della somma coincide con la scelta dell'utente
// se la somma totale è pari e (&& AND) coincide (=== STRETTAMENTE UGUALE) con la scelta dell'utente 
// oppure (|| OR) non è (! NOT) pari -> allora è dispari
if ((isPari(total)) && userChoise === 'pari' || ((!isPari(total)) && userChoise === 'dispari')){
    // se la somma coincide, ho vinto
    console.log('Hai vinto!')
} else {
    // se la somma non coincide, ho perso
    console.log('Hai perso!');
}
