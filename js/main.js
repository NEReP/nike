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
  autoplay:3,
  
 touchRatio:0,
  autoplay:{
    delay:3000, 

  },
 breakpoints:{

  1000: {
    spaceBetween: 10,


  }
 }
},);




var secondSlider = new Swiper (".favorite__slider", {
  
  slidesPerView:3,
  slidesPerGroup:3,
  spaceBetween: 10,
  loop: true,
  speed:3000,

  // autoplay:{
  //   delay:3000,
  
  //  }
},);






let btns= document.querySelectorAll(".input-color")
let images= document.querySelectorAll(".banner__img")

for (let i = 0; i < btns.length; i++){
  let btn = btns[i];
  btn.addEventListener("click", ()=> {
    let image = images[i]
    images.forEach((img)=> {
      img.classList.remove("active");
      image.classList.add("active");

    })
  })
}





const animItems=document.querySelectorAll(".anim-items")
if(animItems.length>0){
  window.addEventListener("scroll",animOnScroll)
  function animOnScroll(){
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeigth = animItem.offsetHeight;
      const animItemOffset=offset(animItem).top;
      const animStart = 4;
      
      let animItemPoint=window.innerHeight-animItemHeigth / animStart;
      if (animItemHeigth>window.innerHeight) {
        let animItemPoint=window.innerHeight-window.innerHeight / animStart;  

      }
      if((scrollY > animItemOffset-animItemPoint ) && scrollY < (animItemOffset + animItemHeigth)){
        animItem.classList.add("_active")
      }
      else{
        if(!animItem.classList.contains("anim-no-hide")){
          animItem.classList.remove("_active") 

        }

      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft=Window.pageXOffset||document.documentElement.scrollLeft,
      scrollTop=Window.pageYOffset||document.documentElement.scrollTop;
    return{top:rect.top + scrollTop, left:rect.left + scrollLeft}
  }
  animOnScroll()
  setTimeout(() => {
    
  }, 300);
  

}
let b







