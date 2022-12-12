//Creo array immagini
const imagesArray = [
    "01.webp",
    "02.webp",
    "03.webp",
    "04.webp",
    "05.webp"
]

//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i]}">
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo il cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function autoCarousel(){
    circles[itemActive].classList.remove('active');
    items[itemActive].classList.remove('active');

    if(itemActive+1 == imagesArray.length){
        
        itemActive = 0;
        
        
    } else {   
        itemActive++;
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');
}

next.addEventListener('click', function(){
    circles[itemActive].classList.remove('active');
    items[itemActive].classList.remove('active');

    if(itemActive+1 == imagesArray.length){
        
        itemActive = 0;
        
        
    } else {   
        itemActive++;
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');


});

prev.addEventListener('click', function(){

    circles[itemActive].classList.remove('active');
    items[itemActive].classList.remove('active');

    if(itemActive-1 == -1){
        
        itemActive = imagesArray.length-1;

    } else {
        
        itemActive--;
        
    }

    items[itemActive].classList.add('active');
    circles[itemActive].classList.add('active');


});

// Autoplay a intervalli di 5 secondi

var flag = true;

const autoPlay = document.querySelector('.autoplay');
const AutoplayTOff = document.querySelector('.stop');

let stopAll = setInterval(autoCarousel, 5000);

autoPlay.addEventListener('click', function(){
    
    if(flag == false){
    stopAll = setInterval(autoCarousel, 5000);
    flag = true;
    }

});

//inseriamo listener per avviare e stoppare l'autoplay

AutoplayTOff.addEventListener('click', function(){
    
    clearInterval(stopAll);
    flag = false;

});

itemsSlider.addEventListener('clickOn', function() {

    clearInterval(stopAll);

});

itemsSlider.addEventListener('clickOff', function() {

    stopAll = setInterval(autoCarousel, 5000);
    flag = false;

});