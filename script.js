
const slides = [
    {
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
        caption: "Beautiful Nature"
    },
    {
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
        caption: "Peaceful Mountains"
    },
    {
        image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        caption: "Beautiful Lake"
    },
    {
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        caption: "Snowy Mountains"
    },
    {
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
        caption: "Green Forest"
    }
];

const slideImage = document.getElementById("slideImage");
const caption = document.getElementById("caption");
const indicators = document.getElementById("indicators");
const slider = document.getElementById("slider");

let currentIndex = 0;
let timer;

function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;

    slideImage.src = slides[currentIndex].image;
    caption.textContent = slides[currentIndex].caption;

    document.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
    });
}

// Create dots
slides.forEach((slide, index) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.addEventListener("click", () => {
        showSlide(index);
        startTimer();
    });
    indicators.appendChild(dot);
});

// Next button
document.getElementById("next").addEventListener("click", () => {
    showSlide(currentIndex + 1);
    startTimer();
});

// Previous button
document.getElementById("prev").addEventListener("click", () => {
    showSlide(currentIndex - 1);
    startTimer();
});

// Automatic sliding
function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000);
}

// Pause on hover
slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", startTimer);

// Start project
showSlide(0);
startTimer();
