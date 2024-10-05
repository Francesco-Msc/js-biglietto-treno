//Price per km

const kmPrice = 0.21;

//Distance request

let distance = prompt('inserisci i km che vuoi percorrere');

//Distance conversion into number

let km = Number(distance);

//Verification if prompt input is a number or not

let price;

if (!isNaN(km)){
    price = km * kmPrice;
} else {
    alert('Per favore aggiorna la pagina ed inserisci un numero');
    
}