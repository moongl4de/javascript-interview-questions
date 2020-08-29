//Hello World in JavaScript. Yes, I've actually gotten this in an interview lol

console.log("Hello, World! :)")

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

//Fizzbuzz
//There are many ways to do this, but this is my go-to solution. Easy to read and it gives you lots of wiggle room if the interview asks you to make it more performant.

function fizzbuzz(num) {
    for (i = 0; i < num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizzbuzz!")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
};

// fizzbuzz(100)

//A more concise version of Fizzbuzz if you wanna go big brain

// function fizzbuzzYeet(num){
// for(let i=0;i<num;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
// }
// fizzbuzzYeet(100)

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

//Fibonacci Sequence Array

function spiralOut() {
    let a = 0, b = 1, result, fibArr = [];
    for (i = 0; i < 10; i++) {
        result = a + b
        fibArr.push(result)
        a = b, b = result
    };
    console.log("Fibonacci Sequence:",fibArr)
};

spiralOut();

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

//Sorting an array

let arr = [4, 1, 5, 3, 6, 12, 66, 123, 2, 6, 77]

console.log("I've been sorted, see?! ", arr.sort((a, b) => (a - b)))

//Okay cool but what if we want to find a duplicate?

// arr.sort((a, b) => (a - b))

for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
        console.log("Duplicate found: ", arr[i])
    }
};

//Nice, now remove it.

// let newArr = []

// for(i = 0; i < arr.length; i++){
//     if(arr[i] === arr[i - 1]){
//         console.log("Duplicate found: ", arr[i])
//     } else (newArr.push(arr[i]))
// }
// console.log("Sorted array with duplicates", arr)
// console.log("Sorted array without duplicates: ", newArr)

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

//Reverse a string

let string = "Reverse this string"
let newString = []
string.split("")
for (i = 0; i < string.length; i++) {
    newString.unshift(string[i])
}

console.log(newString.join(""))

//That's cool and all, but there's an even better way to write it by chaining the split, reverse and join methods.

console.log("Chained methods: ", string.split("").reverse().join(""))

//What if the interviewer asks to reverse at the word level instead of each individual letter being reversed?


console.log("Chained methods: ", string.split(" ").reverse().join(" "))

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

//What is the output for each of these console logs?

console.log(5 + "5") //this logs the string "55"

// "+" applies to numbers and strings. If there are two numbers, it simply adds the numbers (obviously)... but if you have a number and a string, it will concatenate them and convert to a string.
//

console.log(5 - "5") // this logs the number 0
// "-" does not apply to strings, so the string is converted to it's number value and then the equation is executed.

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

//Determine if the string is a palindrome

function palindrome(input) {

    let check = []
    for (i in input) {
        check.unshift(input[i])
    }
    if (check.join("").toLowerCase() == input.toLowerCase()) {
        console.log(input, "is a palindrome!")
    } else {
        console.log(input, "is not a palindrome.")
    }
}

palindrome("Yeet")
palindrome("racecar")
palindrome("Dad")

//Fun Fact: The longest palindromic word in the Oxford English Dictionary is "tattarrattat".    :O


//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//




