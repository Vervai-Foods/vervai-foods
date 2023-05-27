let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

setInterval(() => {
  showSlides((slideIndex += 1));
}, 5000);

let testiSlideIndex = 1;
showTestiSlides(testiSlideIndex);

function plusTestiSlides(n) {
  showTestiSlides((testiSlideIndex += n));
}

function currentTestiSlide(n) {
  showTestiSlides((testiSlideIndex = n));
}

function showTestiSlides(n) {
  let i;
  let slides = document.getElementsByClassName("t-slide");
  let dots = document.getElementsByClassName("t-dot");
  if (n > slides.length) {
    testiSlideIndex = 1;
  }
  if (n < 1) {
    testiSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" t-active", "");
  }
  slides[testiSlideIndex - 1].style.display = "block";
  dots[testiSlideIndex - 1].className += " t-active";
}

const sections = [
  document.getElementById("home"),
  document.getElementById("about"),
  document.getElementById("products"),
  document.getElementById("testimonials"),
  document.getElementById("contact"),
];

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop =
      current.getBoundingClientRect().top + window.pageYOffset - 20;
    // const sectionTop = 15 * $(window).height();
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navlistitem a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".navlistitem a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

function toggleNavbar() {
  const navlist = document.getElementById("navlist");
  if (navlist.style.display === "none") {
    navlist.style.display = "flex";
  } else {
    navlist.style.display = "none";
  }
}
