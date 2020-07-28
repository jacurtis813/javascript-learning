/* First section
var firstName =prompt("What is your first name?");
var lastName =prompt("What is your last name?");
var age =prompt("What is your age?");

var fullName = firstName + " " + lastName

console.log("Your full name is " + fullName);
console.log("you are " + age + " years old");

 Second section script
var age = prompt("What is your age?");

var days = age * 365.25;
alert(age + "  years is roughly  " + days + "  days");
comment out the code so that we can create another small
project within the same file for the same lesson */

// third section
var secretNumber = 4;

var guess = prompt("Guess a number ");

if(Number(guess) === secretNumber) {
    alert("YOU GOT IT RIGHT!!");
}

else {
    alert("Wrong guess!!");
}