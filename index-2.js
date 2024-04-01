
//Write a JavaScript function that accepts two numbers to generate an array between them. For example, if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].


//Create a function that has a function name as numbergenerate and allows a paremeter num1 and num2

function numberGenerate(num1 , num2){

   //Create a variable let that has an empty  array

    let number=[]

     //Create a for of condition that loops

    for(let x = num1 ; x <= num2 ; x ++ ){
    number.push( x ) }
    
    //And return number so as to generate the values

    return number

}

//Then call or invoke the output 

console.log(numberGenerate(4,7));

