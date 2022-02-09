// H1 styling
let h1s = document.getElementsByTagName('h1');
for (h1 of h1s) {
  h1.style.color = "purple";
}

let topCards = document.getElementById('topCards');
topCards.style.backgroundColor = 'red';
topCards.style.padding = '10px';
topCards.style.borderRadius = '10px';

let Shoes = document.getElementById('Shoes');
Shoes.style.backgroundColor = 'tomato';
Shoes.style.padding = '0 20px 20px 20px';
Shoes.style.borderRadius = '30px';


let backpacks = document.getElementById('backpacks');
backpacks.style.backgroundColor = 'green';
backpacks.style.padding = '0 20px 20px 20px';
backpacks.style.borderRadius = '30px';

let cards = document.getElementsByClassName('card');
for (item of cards) {
  item.style.borderRadius = '30px';
}

// Card removibg by button click
let productButtons = document.getElementsByClassName('product_btn');
for (btn of productButtons) {
  //Products button styles 
  btn.style.borderRadius = '30px';
  // Product remove by clicking button
  btn.addEventListener('click', function (event) {
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode.parentNode);
  })
}

//Email form
let emailBtn = document.getElementById('emailBtn');
let InputEmail = document.getElementById('InputEmail');

InputEmail.addEventListener('keyup', function (event) {
  if (event.target.value == '@') { //I just want to include this in value
    emailBtn.removeAttribute('disabled')
  } else {
    emailBtn.setAttribute('disabled', true)
  }
})

// Optional tasks


// Image effects
let images = document.getElementsByTagName('img');
for (image of images) {
  // console.log(image);
  image.addEventListener('mouseover', function (event) {
    event.target.style.transform = 'scale(1.5)';
    event.target.style.transition = '1s';
  })
  image.addEventListener('mouseout', function (event) {
    event.target.style.transform = 'scale(1)';
  })
}

// Email background change
let subForm = document.getElementById('sub_form');

subForm.addEventListener('dblclick', function () {
  subForm.style.backgroundColor = 'aqua';
})