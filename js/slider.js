const slider = document.querySelector(".slider");
const btnOne = slider.querySelector(".slider-button-one");
const btnTwo = slider.querySelector(".slider-button-two");
const btnThree = slider.querySelector(".slider-button-three");
const slideOne = slider.querySelector(".slide-1");
const slideTwo = slider.querySelector(".slide-2");
const slideThree = slider.querySelector(".slide-3");

btnOne.addEventListener("click", function(slideChange) {
  slideOne.classList.add("slide-current");
  slideTwo.classList.remove("slide-current");
  slideThree.classList.remove("slide-current");
  btnOne.classList.add("active");
  btnTwo.classList.remove("active");
  btnThree.classList.remove("active");
})

btnTwo.addEventListener("click", function(slideChange) {
  slideOne.classList.remove("slide-current");
  slideTwo.classList.add("slide-current");
  slideThree.classList.remove("slide-current");
  btnOne.classList.remove("active");
  btnTwo.classList.add("active");
  btnThree.classList.remove("active");
})

btnThree.addEventListener("click", function(slideChange) {
  slideOne.classList.remove("slide-current");
  slideTwo.classList.remove("slide-current");
  slideThree.classList.add("slide-current");
  btnOne.classList.remove("active");
  btnTwo.classList.remove("active");
  btnThree.classList.add("active");
})
