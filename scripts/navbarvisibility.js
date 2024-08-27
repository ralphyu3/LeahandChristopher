
    document.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('footer');
    const footerRect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (footerRect.top <= windowHeight) {
        navbar.classList.add('navbar-hidden');
            } else {
        navbar.classList.remove('navbar-hidden');
            }
        });








