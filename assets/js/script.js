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
*/

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