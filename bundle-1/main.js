/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i > 5; i++) {
    console.log(i);
}
//questo ciclo "for" è un ciclo che in teoria dovrebbe stampare numeri da 0 a 4 solo che in questo modo non verrà eseguito in quanto le due condizioni vanno in contrasto. ovvero la condizione di avvio dice che i=0 poi la condizione di termine dice i>5 e non <5 in questo modo tale condizione è falsa alla partenza ed il ciclo non si avvia. per correggere l esercizio basta mettere nella condizione di termine i<5. quindi stampera i numeri partendo da 0 per 5 volte dfino a finire a 4.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 = 0) {
        return num + 5;
    }
    return num;
}
//questa funzione dovrebbe sommare di 5 il num fornito se dopo il checking dell if il num inserito è pari. tuttavia all interno della condizione if dovremmo sostituire "if (num % 2 === 0)" in quanto nel modo originale si sta ssegnando al resto di num il valore 0 non si sta effettivamente controllando "se" è 0.

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0, i < 5, i++) {
        console.log(i);
    }
}
//la funzione loopToFive() esegue un ciclo for stampando i numeri da 0 a 4 tramite console.log di "i" . tuttavia la sintassi del ciclo è sbagliata perchè abbiamo bisogno dei ";" per separare le condizioni all interno del ciclo for.


// ESERCIZIO 4 (suggerimento: ci sono 8 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++;) {
        if (numbers % 2 = 0); {
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // [2,4,6,8]

//1) Nel ciclo for c'è un punto e virgola in eccesso alla fine dell'espressione "i++".

//2)Nell' "if" il "%" è applicato all'intero array "numbers" invece di essere applicato all'elemento corrente dell'array "numbers[i]".

//3)dopo la condizione dell' if cè un ";" che causa un errore di sintassi

// 4) "return" è posizionata all'interno del ciclo "for", quindi la funzione restituisce il primo numero pari trovato invece di restituire tutti i numeri pari.

//5)La funzione non gestisce l'ultimo elemento dell'array "numbers", in quanto la condizione di terminazione del ciclo "for" è "i < numbers.length - 1", che esclude l'ultimo elemento.

//6)Nella condizione dell'istruzione "if" va utilizzat "==" o "===" invece di "=" per verificare se l'elemento corrente dell'array "numbers[i]" è pari.

//7)Nella funzione "push()",  si aggiunge l'indice "i" all array invece di numbers.

//8) se non scriviamo all ultima riga "console.log(displayEvenNumbers()); non vedremo mai nulla";