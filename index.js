const logo = document.querySelectorAll('#logo path');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');
const navLink = document.querySelectorAll('.nav__link');
const menu = document.querySelector('.checkbox-menu');

for(let i = 0; i < logo.length; i++){
     console.log(`This letter ${i} is ${logo[i].getTotalLength()}`);
}

menu.addEventListener('click', ()=>{
  navList.style.width = '100%';
  navList.style.display = 'flex';
})
navList.addEventListener('click', () =>{
  navList.style.width = '0';
  navList.style.display = 'none';
});



//ANIMATION
AOS.init();

//GLIDER JS
new Glide('.glide').mount();

var input = document.querySelector('#options-autoplay-input')

var glide = new Glide('#options-autoplay', {
  autoplay: input.value,
  hoverpause: false,
  perView: 1
})

input.addEventListener('input', function (event) {
  glide.update({
    autoplay: (event.target.value != 0) ? event.target.value : false
  })
})

glide.mount()


