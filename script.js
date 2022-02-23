// Read more about us
function readMore(){
    let lessTxt = document.getElementById('less');
    let moreTxt = document.getElementById('more');
    let btnTxt = document.getElementById('show-more');

    if (lessTxt.style.display === 'none'){
        lessTxt.style.display = 'inline';
        btnTxt.innerHTML = 'Know more about us';
        moreTxt.style.display = 'none';
    } else {
        lessTxt.style.display = 'none';
        btnTxt.innerHTML = 'close';
        moreTxt.style.display = 'inline';
    }
}

// Slides show
/*let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("customer1");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}*/