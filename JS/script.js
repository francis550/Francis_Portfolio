// Animation du menu lors du défilement
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        header.style.backgroundColor = '#000';
    }
});


// Animation des barres de compétences
const skillBars = document.querySelectorAll('.progress-bar');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const width = bar.getAttribute('style').match(/\d+/)[0];
        bar.style.width = '0%';
        bar.style.transition = 'width 1s ease-in-out';
        setTimeout(() => {
            bar.style.width = `${width}%`;
        }, 200);
    });
};

// Observer pour déclencher l'animation des compétences
const skillsSection = document.querySelector('#competences');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(skillsSection);

// Validation du formulaire de contact
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validation simple
    let isValid = true;
    let errorMessage = '';
    
    if (!data.email || !data.email.includes('@')) {
        errorMessage += 'Email invalide\n';
        isValid = false;
    }
    
    if (!data.message || data.message.length < 10) {
        errorMessage += 'Le message doit contenir au moins 10 caractères\n';
        isValid = false;
    }
    
    if (isValid) {
        // Simulation d'envoi
        alert('Message envoyé avec succès !');
        contactForm.reset();
    } else {
        alert(errorMessage);
    }
});

// Animation des projets au survol
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Gestion du menu hamburger
const menuToggle = document.querySelector('.menutoggle');
const navLinks = document.querySelector('.nav-links'); 

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Bascule la classe 'active'
});

// Fermeture du menu au clic sur un lien
const navItems = document.querySelectorAll('.nav-links li a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});