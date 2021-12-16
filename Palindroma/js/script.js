// Palindroma
// Chiedere all’utente di inserire una parola 
// Creare una funzione per capire se la parola inserita è palindroma

// 1. creo variabile prompt con richiesta di inserimento parola
let userWord = prompt('Inserisci una parola!').toLowerCase().replaceAll(' ', '');


// 2. creo funzione 'invert' con argomento 'letter'.
// il metodo split: divide la parola in sottostringhe e crea array di n elementi -> n lettere x parola
// il metodo reverse: inverte l'array creato con split (in questo caso, le lettere)
// il metodo join: riunisce le lettere della parola invertite dal metodo reverse
function invert(letter){
  let invertedString = letter.split('').reverse().join('');  
  return invertedString;
}

// 3. richiamo la funzione in una variabile e la eseguo:
let invertedWord = invert(userWord);

// 4. creo condizione: 
// se la parola inserita dall'utente è 
// leggibile ugualmente (===) al suo inverso -> è palindroma
// altrimenti -> non è palindroma
if(userWord === invertedWord){
  console.log('La parola è palindroma');
  } else {
  console.log('La parola non è palindroma');
}

