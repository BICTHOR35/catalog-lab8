
let slideIndex = 0;

let slides = document.getElementsByClassName("slide");

let timer;

function showSlide(index) {

    clearTimeout(timer);

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[index].style.display = "block";

    timer = setTimeout(function() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, 3000);
}

showSlide(slideIndex);

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    if (event.key === "ArrowLeft") {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

});

