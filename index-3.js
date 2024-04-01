
//You are tasked with writing a function that takes an array of numbers as input and returns a new array containing only the prime numbers from the original array. How would you implement this function efficiently, ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array? For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].

 //Create a function with a functionname that takes a parameter num to checks if number is a prime factor or not

function primeNumber1(num)
{
  //Create an if condition that return value as either false or true

    if (num<= 1) return false;

    if (num === 2) return true;

    if (num % 2 === 0) return false;

    //Create a for of condition that loops using Math.sqrt() so as to return the square root 

    for (let x = 3; x <= Math.sqrt(x); x += 2) 
    {
        if (num % x === 0) return false;
    }
    return true;
}

//Create a function with a function name and accepts a parameter num1 that its purpose is to checks each number so as to add prime numbers to a result array.

function primeNumber2(num1) 
{

   //Create a variable let that has an empty  array

    let number = [];

     //Create a for of condition that will confirm all the numbers and loops prime numbers to the array

    for (let num of num1) 
    {
        if (primeNumber1(num)) {
            number.push(num);
        }
    }

    return number;
}

console.log(primeNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
