




var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: -16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

window.onresize = function() {
  if (window.innerWidth > 767) {
    location.reload();
    swiper.disable();
  } else {
    swiper.enable();
  }
};
const mobilescreen = document.body.clientWidth;
if (mobilescreen < 767){
  swiper.enable()
} else {
  swiper.disable()
}



// КНОПКА раскрытия на планшет //

const flipImgRename = document.querySelector(".main-info__button");
flipImgRename.addEventListener ("click",() => {
  const flipImg = document.querySelector (".main-info__img-more");
  flipImg.classList.toggle("active-img");
  const Rename = document.querySelector (".main-info__button-text");
  Rename.classList.toggle ("button-active");
  if (Rename.classList.contains("button-active")){
    Rename.innerHTML = "Скрыть";
    const addNewCompany = document.querySelectorAll(".slider__item");
    for (i = 8; i < addNewCompany.length;i++){
      addNewCompany[i].classList.remove("disable-pc")
    }
    for (i = 6;i < addNewCompany.length; i++){
      addNewCompany[i].classList.remove("disable")
    }

  } else {
    Rename.innerHTML = "Показать все";
    const addNewCompany = document.querySelectorAll(".slider__item");
    for (i = 6;i < addNewCompany.length; i++){
      addNewCompany[i].classList.add("disable")
    }
    for (i = 8; i < addNewCompany.length;i++){
      addNewCompany[i].classList.add("disable-pc")
    }
  };
 


})



