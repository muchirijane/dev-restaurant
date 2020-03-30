const logo = document.querySelectorAll('#logo path');

for(let i = 0; i < logo.length; i++){
     console.log(`This letter ${i} is ${logo[i].getTotalLength()}`);
}


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


