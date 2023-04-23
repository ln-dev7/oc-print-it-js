const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupérer les éléments du DOM
const banner = document.getElementById("banner");
const bannerImg = banner.querySelector(".banner-img");
const bannerText = banner.querySelector("p");
const dots = banner.querySelector(".dots");
const arrowLeft = banner.querySelector(".arrow_left");
const arrowRight = banner.querySelector(".arrow_right");

// Initialiser l'index et le nombre de diapositives
let slideIndex = 0;
const slideCount = slides.length;

// Fonction pour afficher la diapositive suivante
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  showSlide();
}

// Fonction pour afficher la diapositive précédente
function showPrevSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  showSlide();
}

// Fonction pour afficher une diapositive spécifique
function showSlide() {
  const slide = slides[slideIndex];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  bannerText.innerHTML = slide.tagLine;

  // Mettre à jour les indicateurs de diapositives
  dots.innerHTML = "";
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === slideIndex) {
      dot.classList.add("dot_selected");
    }
    dots.appendChild(dot);
  }
}

// Afficher la première diapositive
showSlide();

// Ajouter les écouteurs d'événements pour les flèches et les indicateurs de diapositives
arrowLeft.addEventListener("click", showPrevSlide);
arrowRight.addEventListener("click", showNextSlide);
dots.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    const dotIndex = Array.from(dots.children).indexOf(event.target);
    slideIndex = dotIndex;
    showSlide();
  }
});

// Ajouter une fonction pour avancer la diapositive automatiquement toutes les 5 secondes
// setInterval(showNextSlide, 5000);
