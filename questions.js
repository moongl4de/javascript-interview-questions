//Hello World in JavaScript. Yes, I've actually gotten this in an interview lol

console.log("Hello, World! :)")

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//

//Fizzbuzz
//There are many ways to do this, but this is my go-to solution

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

fizzbuzz(100)

//A more concise version of Fizzbuzz if you wanna go big brain
// function fizzbuzzYeet(num){
// for(let i=0;i<num;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i)
// }

// fizzbuzzYeet(100)

//------------------------------------------------------------------------//
//------------------------------------------------------------------------//
//------------------------------------------------------------------------//