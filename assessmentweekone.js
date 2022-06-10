// ASSESSMENT - WEEK 1 - AMANI MAGDOUBI 

// Activity 5 - Fizz Buzz 
// An If / Else Statement using && Logical Operators, checking the values to ensure it meets the criteria and logs the statement to the terminal. Uses if; else if and a else. Checks using a strict equals (value and data type).
let numOne = 124;

if (numOne % 3 === 0 && numOne % 5 === 0) {
    console.log("fizz buzz"); 
} else if (numOne % 3 === 0) {
    console.log("fizz"); 
} else if (numOne % 5 === 0) {
    console.log("buzz"); 
} else {
    console.log(numOne); 
}

// Activity 5 - Random Number between 1 to 30 and see if you can divide it by 7
// A For Loop with an initializer, condition and increments. Using Math.random to generate a random number * 30 and using Math.floor to get a whole number. Using an If statement to check if it's dividable by 7.
for (let i = 0; i < 6; i++) {
    let numTwo = Math.floor(Math.random() * 30);
        if (numTwo % 7 == 0) {
            console.log(`Yeah, this number: ${numTwo} can be divided by 7`)
        } else {
            console.log(`Ooops, this number: ${numTwo} can NOT be divided by 7 ... Try again >>`)
        }
}

// Activity 2 - 6 Random Numbers between 1-50 
//A For Loop with an initializer, condition and increments. Using Math.random to generate a random number between 1 - 50 * 50 and using Math.floor to get a whole number. Logging 6 random numbers between 1 - 50 to the console. 
for (let r = 0; r < 6; r++) {
    let numThree = Math.floor(Math.random() * 50);
    console.log(numThree);
}

// Activity 3 - count 9 - 0 
// A For Loop with an initializer, condition and increments. Using a array with numbers 0-9 to logging to the console in reverse. 
let numFour = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numFour = numFour.reverse()
for (let p = 0; p <= numFour.length; p++) {
    console.log(numFour[p]);
}

// Activity 2 - Pet Object 
// An Object called Pet with 4 key-value pairs using a method eatAndDrink to return a string using the dot.notation and this key word.
const pet = {
    name:"Asool",
    typeOfPet: "Bird", 
    age: 1,
    colour: "Yellow", 

    //Method 
    eatAndDrink() {
        return this.name + " is eating / drinking."
    }, 
}

console.log(pet.eatAndDrink()); 

// Activity 3 - Password 
// An If Statement checking the length of the var called password.
let password = "opdxf";

if (password.length < 8) {
    console.log("Your Password is too short!")
} else {
    console.log(password);
}

// Activity 4 - Divisible Numbers by 3 or 5
// A If Statement checking if the number is divisible by 3 or 5 using the OR || Logical Operator then printing the a string to the terminal. 
let numSeven = 21;

if (numSeven % 3 === 0 || numSeven % 5 === 0) {
    console.log("This number is divisible by 3 or 5"); 
} else {
    console.log("This number is NOT divisible by 3 or 5"); 
}

