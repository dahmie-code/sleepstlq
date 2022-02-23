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
let slideIndex = 1;
showSlides(slideIndex);

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
      dots[i].className = dots[i].className.replace(" show", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " show";
}

// Quantity and Amount Calculation
function calculate2(elm) {
  var chk = $(elm),                // the checkbox
      vlu = chk.val(),             // the current qty value
      pid = chk.data("productid"), // product id
      unt = chk.data("unitprice"), // unit price
      res = $(".result_" + pid),   // the result for this product
      tot = vlu * unt;             // total
  
  res.text("USD " + tot);
}


function calculate(elm) {
  var vlu = elm.value,           // the current qty value
      pid = elm.getAttribute("data-productid"), // product id
      unt = elm.getAttribute("data-unitprice"), // unit price
      res = document.getElementsByClassName("result_" + pid),   // the result for this product
      tot = vlu * unt;             // total
  
  res[0].innerHTML = "USD " + tot;
}