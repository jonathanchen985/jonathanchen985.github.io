function createList() {
    const myHeader =document.querySelector('.header');
    myHeader.textContent="Jonathan Chen's list of countries";

    const myContent= document.querySelector('.content');
    myContent.removeChild(myContent.lastElementChild);
    var myList = document.createElement('ol');
    myList.classList.add("countries");
    myContent.appendChild(myList);
    var countryList =
    

}

function randomCountries(){ 
numbers=[];
var i;
for (i= 0, i<25; i++){
    numbers=math.floor(math.random()*242)+1;
}

}



