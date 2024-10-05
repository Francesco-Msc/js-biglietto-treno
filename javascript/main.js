// Price per km
const kmPrice = 0.21;

// Distance request
let distance = prompt('Inserisci i km che vuoi percorrere');

// Distance conversion into number
let km = Number(distance);

//Asigned viriables

let price;
let priceUnder18;
let priceOver65;
const discount20 = 0.2;
const discount40 = 0.4;

// Verification if prompt input is a number or not

if (!isNaN(km)) {
    price = km * kmPrice;

    // Age request

    let ageInput = prompt('Inserisci la tua età');
    let age = Number(ageInput);
    
    // Verification if prompt input is a number or not

    if (!isNaN(age)) {
        if (age >= 0 && age <= 18 ) {
            priceUnder18 = price - (price * discount20);
            console.log(priceUnder18.toFixed(2));
            
        }
        else if (age >= 65) {
            priceOver65 = price - (price * discount40);
            console.log(priceOver65.toFixed(2));
            
        } else {
            console.log(price.toFixed(2));
            
        }
    } else {
        alert("Per favore aggiorna la pagina ed inserisci un numero nel campo dell'età");
    }
} else {
    alert('Per favore aggiorna la pagina ed inserisci un numero');
}