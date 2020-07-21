// carousel
// const gap = 16;

// const carousel = document.getElementById("carousel"),
//   content = document.getElementById("content"),
//   next = document.getElementById("next"),
//   prev = document.getElementById("prev");

// next.addEventListener("click", (e) => {
//   carousel.scrollBy(width1 + gap, 0);
//   if (carousel.scrollWidth !== 0) {
//     prev.style.display = "flex";
//   }
//   if (content.scrollWidth - width1 - gap <= carousel.scrollLeft + width1) {
//     next.style.display = "none";
//   }
// });
// prev.addEventListener("click", (e) => {
//   carousel.scrollBy(-(width1 + gap), 0);
//   if (carousel.scrollLeft - width1 - gap <= 0) {
//     prev.style.display = "none";
//   }
//   if (!content.scrollWidth - width1 - gap <= carousel.scrollLeft + width1) {
//     next.style.display = "flex";
//   }
// });

// let width1 = carousel.offsetWidth;
// window.addEventListener("resize", (e) => (width1 = carousel.offsetWidth));

// slider
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3200); // Change image every 2 seconds
}
