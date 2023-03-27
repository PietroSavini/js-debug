/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
//  function checkAge() {
//     const myAge = 32;
//     const message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();

//questo codice dovrebbe controllare tramite una condizione "if" la variabile myAge confrontando se è maggiore o minore di 18
//tuttavia non possiamo lasciare una variabile di tipo "const" da dichiarare più avanti nel codice (const:message), dovremmo utilizzare "let"
//inoltre non è stato inserito nessun paramentro nello sviluppo della funzione.
//la variabile myAge dovrebbe essere espressa come const myAge = age;(parametro della funzione : function checkAge(age))
// inoltre dovremmo inserire una streinga di "return message" per poterla poi effettivamente vedere con un console,log all esterno della funzione.
//---------------------------------------------------------------------------------------------------------

 //ESERCIZIO 2
 function printColorsNumber() {
     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
     console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
 }
 printColorsNumber();


//questa funzione dovrebbe calcolare il numero di oggetti presenti nell array "colors".
// tuttavia l'array dichiarato all interno della funzione esisterebbe solo li, quindi non potremmo utilizzare la funzione per altri array ... dovremmo sviluppare la funzione corretta come segue: 

// const colors = ['blue', 'red', 'yellow', 'green', 'black'];
// function printColorsNumber(array) {
//     const colorsNum = array.length ;
//     console.log(colorsNum);
// }
// printColorsNumber(colors);
//----------------------------------------------------------------------------------------------------

// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

//questa funzione  fa la somma tra 2 nummeri chiedendo all utente un numero da voler sommare. facendo finta che il numero da sommare sia sempre 12 e non un numero da poter utilizzare comeparametro della funzione quando la si richiama. cèeè comunque un errore in quanto 


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();
//questo esercizio è una semplice funzione di validazione che valida se l indirizzo mail inserito dall utente tramite un prompt è presente nell array di indirizzi prefissato. tuttavia "let grantAccess = 'false'"  impica che la variabile "grantAccess" non è una variabile booleana ma una stringa. se si volesse utilizzare lavariabile in modo booleano vanno tolte le virgolette su "grantAccess" in questo modo "const grantAcces = false;".   inoltre potremmo utilizzare il ".find()" method che ci restituisce gia di base un valore booleano semplificando ulteriolmente la funzione in questo modo : " const accessGranted = addresses.find(address => address === userEmail) !== undefined;".