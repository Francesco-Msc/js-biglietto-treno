//info request

let distanceInput = prompt('inserisci la distanza da percorrere');
let ageInput = prompt("inserisci l'età del passegero");

//conversion into numbers

let km = Number(distanceInput);
let age = Number(ageInput);

//asigned variables

const kmPrice = 0.21;
let price;

if (!isNaN(km) && !isNaN(age) && (km >= 0 && age >= 0)){             //verification if inputs are numbers
    price = km * kmPrice;                                            //full price
} 
else {
    alert ('inserisci dei numeri validi nei campi richiesti');
}

//discounts

const discount20 = 0.2;
const discount40 = 0.4;
let priceUnder18;
let priceOver65;

if (age < 18){                                                                               //price 20% off for under 18
    priceUnder18 = price - (price * discount20);
    document.getElementById('yourPrice').innerHTML = `€ ${priceUnder18.toFixed(2)}`;
} 
else if (age > 65){                                                                         //price 40% off for over 65
    priceOver65 = price - (price * discount40);
    document.getElementById('yourPrice').innerHTML = `€ ${priceOver65.toFixed(2)}`;
}
else{
    document.getElementById('yourPrice').innerHTML = `€ ${price.toFixed(2)}`;
}