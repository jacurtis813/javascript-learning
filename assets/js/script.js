/* First section
var firstName =prompt("What is your first name?");
var lastName =prompt("What is your last name?");
var age =prompt("What is your age?");

var fullName = firstName + " " + lastName

console.log("Your full name is " + fullName);
console.log("you are " + age + " years old");

// Second section script
var age = prompt("What is your age?");

var days = age * 365.25;
alert(age + "  years is roughly  " + days + "  days");
//

// third section
var secretNumber = 4;  // our correct secret number

var stringGuess = prompt("Guess a number "); // states that name of stringGuess is set to assign a prompt to "guess a number?"
var guess = Number(stringGuess);  // states that the stringGuess being wrapped in quotes will now be a full number rather than a string. 

if(guess === secretNumber) {  // states that if the guess which is also the stringGuess, is equal to the secret number than the user got it right
    alert("YOU GOT IT RIGHT!!"); // this is the method to alert the user of their input that was prompted
}

else if(guess > secretNumber) {  // states that if the guess is greater than the secretnumber, to alert the user they need to guess again
    alert("Too high, guess lower."); // this is the method to alert the user of their input that was prompted
}

else {  // states that if neither of the above tests are ran that this will be the final stage to check/ test. if not equal alert to guess again
    alert("Too low, guess higher.") // this is the method of alert once more
}

// fourth excercise
var counter = -10;

while(counter < 20){
    console.log(counter);
    counter++;
}

var counter = 10;

while(counter < 40){
    console.log(counter);
    counter+=2;
}

var counter = 301;

while(counter < 333){
    console.log(counter);
    counter+=2;
}

// fifth excercise

var answer = prompt("Are we there yet?");

while(answer !== "yes") {
    var answer = prompt("Are we there yet?");
}

alert("Yay, We made it!")

//for loops section
console.log("PRINTING ALL NUMBERS BETWEEN -10 and 19")

for (var i = -10; i < 20; i++) {
    console.log(i)
}

console.log("PRINTING ALL EVEN NUMBERS BETWEEN 10 and 40")

for (var i = 10; i <= 40; i += 2) {
    console.log(i)
}

console.log("PRINTING ALL ODD NUMBERS BETWEEN 300 and 333")


for (var i = 300; i <= 333; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}
//first way to perform this task or...
for(var i = 301; i<= 333; i+=2) {
    console.log(i)
}

console.log("PRINTING ALL NUMBERS divisible by both 5 and 3 BETWEEN 5 and 50")

for (var i = 5; i <= 50; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log(i);
    }
}
*/
