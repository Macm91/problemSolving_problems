"use strict";

//    
// let hello = "Hello"; 
// let catchRev= [];


// function reverseString (input){
//     for (let i = input.length-1; i >= 0; i--){
//         catchRev.push (input[i]);
//     }
// }

// let show = reverseString(hello);
// console.log (catchRev.join(""));


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

//
//

let strCharacters = "aaaabbbbccd";
let arrCatchCharacters =[];
let countOfCharacter= 0;
let character=""

function sortCharacters (string){
    for (let i=0; i<string.length; i++){
    let count=0
     for(let j=0; j<string.length; j++){
        if (string[i] === string[j]){
             count++
             if (count>1)
             string[i++];
    }
    }
    if(!arrCatchCharacters.includes(string[i])){            
  arrCatchCharacters.push (count+string[i]); 
    }
}
}

sortCharacters(strCharacters);
console.log (arrCatchCharacters);

//
//Bonus question
//
//function to see if the word is a palindrome
//1) function to reverse the word and put it into a string 
//2)function to compare the forward and backward words 
    //if same, then return or console. 



let hello = "Hello"; 
let word = "madam";


function reverseString (input){
    let catchRev= [];
    for (let i = input.length-1; i >= 0; i--){
        catchRev.push (input[i]);
    }
    return (catchRev.join(""))
}

function palindrome (word){
    let reverseWord= reverseString(word);
    if (reverseWord == word){
        console.log ("The word '"+ word+ "' is a palindrome!")
    }
}

let show = reverseString(hello);
console.log (show);

let isIt = palindrome (word);
