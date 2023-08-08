const selectSingle = document.querySelector('.select');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');


selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } 
  else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

var slider = new Swiper (".slider", {

  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
       
 },
  slidesPerView:3,
  slidesPerGroup:3,
  spaceBetween: 0,
  loop: true,
  speed:2500,
  autoplay:10,
  autoplayDisableOnInteraction: false,
},);
var secondSlider = new Swiper (".favorite__slider", {


  slidesPerView:3,
  slidesPerGroup:3,
  spaceBetween: 10,
  loop: true,
  speed:3000,
  autoplay:0,
  autoplayDisableOnInteraction: true,
},);

let banner = document.querySelectorAll(".banner__img");
let bannerImg = banner.children;
let mainFormRadioButtons=document.forms[1]
let radioBtn=document.querySelectorAll(".input-color");\









