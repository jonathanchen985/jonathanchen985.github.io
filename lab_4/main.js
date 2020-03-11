const myHeader = document.querySelector(".header");
myHeader.innerHTML= "Jonathan Chen's Lab 4";

function clickMe() {
   
    const myName = document.createElement("p");
    myName.className="name";

    const myCharacter = document.createElement('p');
    myCharacter.className="character";

    myName.appendChild("my name has 12 characters") ;
    myCharacter.appendChild("the third character in my name is ")



let letter = string.toUpperCase();
let line = string.substring(10,13);
myCharacter.setAttribute('style', 'white-space: pre;');

myCharacter.innerHTML = "the third character in my name is " + letter.charAt(2);
myCharacter.innerHTML += '\r\n' + line;

let firstname = string.substring(0,7);
let lastname = string.substring(8,13);  
var length = firstname.length;
var length2 = lastname.length;
var total = length + length2;


myHeader.innerHTML = "Jonathan Chen's Lab 4 " + total;


}
    
