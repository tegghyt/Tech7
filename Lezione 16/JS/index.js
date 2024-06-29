//const year = 2024;
//console.log(result)

//alert(year);
/*
let result=0;
const a=10;
const b=20;

result = a+b;

console.log(result);

const message1 = "hello";
const message2 = "world";

const message = message1+ " "+message2;

console.log(message);

const valueFalse = false;
const valueTrue = true;

console.log(valueFalse);
console.log(valueTrue);

const classRoom = ["pippo", "gianpietro", "norberto"];

console.log(classRoom);

const classRoomAge = [13, 2, 456];

console.log(classRoomAge);

const person = {
    firstName: "Matteo",
    lastName: "Martinez",
}

const classRoomObj = {
    matteo:{
        irstName: "Matteo",
        lastName: "Martinez",
    }
}*/


const a=10;
const b=20;
const sum=a+b;
const subtract=a-b;
const division=a/b;
const moltiplication=a*b;
const powerOf=10 ** 2;
const remainder=10%2;

console.log(sum);
console.log(subtract);
console.log(division);
console.log(moltiplication);
console.log(powerOf);
console.log(remainder);

if(sum>10){
    console.log("è maggiore");
}else{
    console.log("è minore");
}

if(10 == 10){
    console.log("si")
}

if(false == 0){
    console.log("è false")
}

if(false === 0){        /* === serve per confrontare il valore*/
    console.log(gg)
}

if(10 != 20){
    console.log("grazie al cazzo");
}

if(10 !== 20){
    console.log("grazie al cazzo");
}

const wather="sunny";

if(wather == "sunnny"){
    console.log("ta'apposto c'è l'sole")
}else if(wather === "rain"){
    console.log("na merda brodo sta a diluvia")
}else{
    console.log("bho non se capisce una ciola de che fa")
}

const x=10;

if(x > 5 && x<20){
    console.log("condizione and")
}

if(x > 5 || x < 8){
    console.log("condizione or")
}

for(let i=0; i<10; i++){
    console.log(i)
}

let j=0;

while(j<9){
    console.log(j);
    j++;
}

const classRoom = ["pippo", "gianpietro", "norberto"];

classRoom.forEach((person) => {
    console.log(person)
});