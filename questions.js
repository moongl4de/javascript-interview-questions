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

//Fibonacci Sequence

function spiralOut() {
    let a = 0,
        b = 1,
        result;
    for (i = 0; i < 10; i++) {
        result = a + b
        console.log(result)
        a = b
        b = result
    };
};

spiralOut()

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