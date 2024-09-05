let currentIndex = 1; // Start at 1 because we're adding cloned slides
let transitioning = false; // Flag to prevent multiple transitions

// Get carousel elements
const carouselInner = document.querySelector('.carousel-inner');
const totalItems = document.querySelectorAll('.carousel-item').length;

// Clone the first and last slides for smooth transitions
const firstSlide = document.querySelector('.carousel-item').cloneNode(true);
const lastSlide = document.querySelector('.carousel-item:last-child').cloneNode(true);

// Append cloned slides
carouselInner.appendChild(firstSlide);
carouselInner.insertBefore(lastSlide, carouselInner.firstElementChild);

// Total slides including the clones
const totalSlides = totalItems + 2;

// Initialize the carousel by showing the first actual slide (index 1)
carouselInner.style.transform = `translateX(-100%)`;

// Function to show the slide
function showSlide(index) {
    if (transitioning) return; // Prevent double transitions
    transitioning = true;

    // Smoothly transition to the next or previous slide
    carouselInner.style.transition = 'transform 0.5s ease-in-out';
    carouselInner.style.transform = `translateX(-${index * 100}%)`;

    // After the transition ends, check if we need to jump (invisible jump)
    carouselInner.addEventListener('transitionend', () => {
        if (index === 0) {
            // Jump from cloned last slide to the actual last slide
            carouselInner.style.transition = 'none'; // Disable transition
            currentIndex = totalItems; // Set to the last real slide
            carouselInner.style.transform = `translateX(-${totalItems * 100}%)`; // Move to the last real slide
        } else if (index === totalSlides - 1) {
            // Jump from cloned first slide to the actual first slide
            carouselInner.style.transition = 'none'; // Disable transition
            currentIndex = 1; // Set to the first real slide
            carouselInner.style.transform = `translateX(-100%)`; // Move to the first real slide
        } else {
            currentIndex = index;
        }

        // Re-enable transition after jumping and allow next transition
        setTimeout(() => {
            carouselInner.style.transition = 'transform 0.5s ease-in-out'; // Re-enable transition
            transitioning = false;
        }, 50); // Small delay before re-enabling transition
    }, { once: true });
}

function nextSlide() {
    if (!transitioning) showSlide(currentIndex + 1);
}

function prevSlide() {
    if (!transitioning) showSlide(currentIndex - 1);
}
