const myHeader = document.querySelector('.header');
myHeader.textContent = "Jonathan Chen's Lab 4";

const myName = document.querySelector('.name');
myName.textContent = 'my name has 12 characters';

const myCharacter = document.querySelector('.character');
let string = "Jonathan Chen";
let letter = string.toUpperCase();
let line = string.substring(10,13);
myCharacter.setAttribute('style', 'white-space: pre;');

myCharacter.textContent = "the third character in my name is " + letter.charAt(2);
myCharacter.textContent += '\r\n' + line;

let firstname = string.substring(0,7);
let lastname = string.substring(8,13);
var length = firstname.length;
var length2 = lastname.length;
var total = length + length2;


myHeader.textContent = "Jonathan Chen's Lab 4 " + total;



    
