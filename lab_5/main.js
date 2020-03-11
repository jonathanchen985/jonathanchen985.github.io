function clickMe() {
    const myHeader =document.querySelector('.header');
    myHeader.textContent="Jonathan Chen's list of countries";

    const myContent= document.querySelector('.content');
    myContent.removeChild(myContent.lastElementChild);
    var myList = document.createElement('ol');
    myList.classList.add("countries");
    myContent.appendChild(myList);
    myList.getElementsByClassName('countries').innerHTML=countries;
   

    

}

function randomCountries(){ 
numbers=[];
var i;
for (let i= 0; i<25; i++){
    numbers=math.floor(math.random()*242)+1;
    random.push(numbers);
}
for (i=0;  i<25; i++ ){
    numbers=countries;

}

}



