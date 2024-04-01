
//Write a function that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

//toUppercase()=>to uppercase characters
//toLowerCase()=>

//Create a function that has a function name as swapCase and allows a paremeter string

function swapCase(str){

    //Create a variable let that has an empty string
    let swapCase = ""
    
    //Create a for of condition that loops
    for(const char of str){

        if(char === char.toLowerCase()){
            swapCase += char.toUpperCase()
        }else{
            swapCase += char.toLowerCase()
        }
        
    }

    //And return anything that has been swapped
    return swapCase
    
}

//Then call or invoke the output

console.log(swapCase("The Quick  Brown Fox"));

