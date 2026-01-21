// CAROUSEL FUNCTIONALITY
function carouselMove(direction, btn) {
  const carousel = btn.closest('.carousel');
  const slides = carousel.querySelectorAll('.carousel-slide');
  let index = parseInt(carousel.getAttribute('data-index'));

  index += direction;
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;

  slides.forEach((slide, i) => slide.style.display = i === index ? "block" : "none");
  carousel.setAttribute('data-index', index);
}

// initialize carousels
document.querySelectorAll('.carousel').forEach(carousel => {
  carousel.querySelectorAll('.carousel-slide')[0].style.display = "block";
});

// COLLAPSIBLE DETAILS
document.querySelectorAll('.collapsible').forEach(btn => {
  btn.addEventListener('click', function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});
