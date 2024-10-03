console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (var i = 0; i <= 100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
for (var i = 0; i <= 100; i++){
    if(i < 100){
        if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i}`);
            console.log("FizzBuzz");
            console.log(`FizzBuzz counter = ${counter3}`);
            counter3++;
        }
        if(i % 3 == 0){
            console.log(`${i}`);
            console.log("Fizz");
            console.log(`Fizz counter = ${counter1}`);
            counter1++;
        }
        if (i % 5 == 0) {
            console.log(`${i}`);
            console.log("Buzz");
            console.log(`Buzz counter = ${counter2}`);
            counter2++;
        } 
        
    }else{
        console.log(`FIZZBUZZ printed ${counter3} times. FIZZ printed ${counter1 - 1} times. BUZZ printed ${counter2} times.`)
    }
}
// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

var whileCounter1 = 0;
while(whileCounter1 < 100){
    if(whileCounter1 % 2 != 0){
        console.log(whileCounter1);
    }
    whileCounter1++;
}

var whileCounter2 = 0;
var fizzCounter = 0;
var buzzCounter = 0;
var fizzBuzzCounter = 0;

while(whileCounter2 <= 100){
    if(whileCounter2 < 100){
        if (whileCounter2 % 3 == 0 && whileCounter2 % 5 == 0) {
            console.log(`${whileCounter2}`);
            console.log("FizzBuzz");
            console.log(`FizzBuzz counter = ${fizzBuzzCounter}`);
            fizzBuzzCounter++;
        }
        if(whileCounter2 % 3 == 0){
            console.log(`${whileCounter2}`);
            console.log("Fizz");
            console.log(`Fizz counter = ${fizzCounter}`);
            fizzCounter++;
        }
        if (whileCounter2 % 5 == 0) {
            console.log(`${whileCounter2}`);
            console.log("Buzz");
            console.log(`Buzz counter = ${buzzCounter}`);
            buzzCounter++;
        } 
        
        whileCounter2++;
    }else{
        console.log(`FIZZBUZZ printed ${fizzBuzzCounter} times. FIZZ printed ${fizzCounter - 1} times. BUZZ printed ${buzzCounter} times.`)
        break;
    }
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let found = false;

for (var i = 0; i <= n; i++){
    if(i == value){
        console.log("Found value!");
        found = true;
        break;
    }
}
if(!found){
    console.log("Did not find value.")
}

// Exercise Bonus Section
console.log("EXERCISE Bonus:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000

var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
for (var i = start; i <= end; i++){
    if(i < 100){
        /*if (i % 3 == 0 && i % 5 == 0) {
            console.log(`${i}`);
            console.log("FizzBuzz");
            console.log(`FizzBuzz counter = ${counter3}`);
            counter3++;
        }*/
        if(fizzDivisor){
            console.log(`${i}`);
            console.log("Fizz");
            console.log(`Fizz counter = ${counter1}`);
            counter1++;
        }
        if (buzzDivisor) {
            console.log(`${i}`);
            console.log("Buzz");
            console.log(`Buzz counter = ${counter2}`);
            counter2++;
        } 
        
    }else{
        console.log(`FIZZ printed ${counter1} times. BUZZ printed ${counter2} times.`)
    }
}