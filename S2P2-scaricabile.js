// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = amy //cambia il valore qui per provare se il tuo algoritmo funziona!

//Dati gli utenti, una lista di prezzi e il costo di spedizione, procediamo
console.log("Gli utenti registrati sono: Marco Rossi, Paul Flynn e Amy Reed; il costo di spedizione è: 50");

let acquisto = 0; //costo iniziale
  
for ( let i = 0; i < prices.length; i++) {
  acquisto += prices[i]; //aggiungo di volta in volta al costo i prezzi dell'array prices
  console.log("Il prezzo del carrello è:" + acquisto);
}
  
  //Ci sono tipologie di utenti Ambassador che riceveranno uno sconto del 30% (valore specificato negli oggetti degli utentu)
  if(utenteCheEffettuaLAcquisto.isAmbassador) { //se l'utente è ambassador
    acquisto = acquisto * 0.7;  //riceve lo sconto del 30%
  }
    
  //Ci sono sconti aggiuntivi, se si supera un carrello dal costo di euro 100 la spedizione è gratuita
  if (acquisto <= 100) {    //Se il carrello ha un costo minore di 100 euro
    acquisto += shippingCost;   //allora sommo al costo del carrello il costo di spedizione
  }

  //lista array degli utenti
  const arrayUtenti = [];
  arrayUtenti.push(paul, amy, marco);
  console.log("Gli utenti sono:" + arrayUtente);


  for(let i = 0; i < arrayUtenti.length; i++) {   //per ogni utente creo la variabile nomeCognomeUtenti con il quale andiamo a prendere appunto i nomi e i cognomi
    const ambassadorStatus = arrayutenti.isAmbassador ? "è" : "non è";
  
    console.log(`${arrayUtente[i].name} ${arrayUtente[i].lastName} ${arrayUtente[i].ambassadorStatus}`)
  }






