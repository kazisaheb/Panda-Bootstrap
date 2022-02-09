let h1s = document.getElementsByTagName('h1')[6];
//console.log(h1s); // Not getting all h1
h1s.style.color = "red";

let topCards = document.getElementById('topCards');
topCards.style.backgroundColor = 'red';
topCards.style.padding = '10px';

let Shoes = document.getElementById('Shoes');
Shoes.style.backgroundColor = 'tomato';
Shoes.style.paddingBottom = '20px';

let backpacks = document.getElementById('backpacks');
backpacks.style.backgroundColor = 'green';
backpacks.style.paddingBottom = '20px';

let cards = document.getElementsByClassName('card');
for (item of cards) {
  item.style.borderRadius = '30px';
}

let buttons = document.getElementsByClassName('product_btn');
for (btn of buttons) {
  btn.style.borderRadius = '30px';


  btn.addEventListener('click', function (event) {
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  })
}

//Email form
let emailBtn = document.getElementById('emailBtn');
let InputEmail = document.getElementById('InputEmail');

