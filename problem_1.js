"use strict";

//    
let hello = "Hello"; 
let catchRev= [];


function reverseString (input){
    for (let i = input.length-1; i >= 0; i--){
        catchRev.push (input[i]);
    }
}

let show = reverseString(hello);
console.log (catchRev.join(""));


//
//create string 
//create function that takes in a string
//needs to capitalize each word



let phrase= "hello world!";
let anotherPhrase= "does this still work?"


let finalPhrase= []

function capitalize (phraseInput){    
for (let i=0; i<phraseInput.length; i++){
    if (i<=0){
        finalPhrase.push (phraseInput.charAt(i).toUpperCase())
    }
    else if (phraseInput[i]==" "){
       
        finalPhrase.push (phraseInput[i]);
        i++
        finalPhrase.push(phraseInput[i].toUpperCase());
    }
    else{
        finalPhrase.push(phraseInput[i]);
    }
}
}




capitalize(phrase);
console.log (finalPhrase.join(""));

capitalize (anotherPhrase);
console.log(finalPhrase.join(""));