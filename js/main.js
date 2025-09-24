// JavaScript for Hajar's Bling

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            const whatsappNumber = '2348073867190';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%2C%20my%20name%20is%20${encodeURIComponent(name)}.%20${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    // Floating widget interaction
    const whatsappIcon = document.getElementById('whatsapp-icon');
    const quickOrderFormContainer = document.querySelector('.quick-order-form-container');
    if (whatsappIcon) {
        whatsappIcon.addEventListener('click', () => {
            quickOrderFormContainer.classList.toggle('active');
        });
    }

    // Quick order form submission
    const quickOrderForm = document.getElementById('quick-order-form');
    if (quickOrderForm) {
        quickOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('quick-name').value;
            const products = document.getElementById('quick-products').value;
            const whatsappNumber = '2348073867190';
            const message = `Hello Hajar’s Bling, my name is ${name}. I’d like to order:\n- ${products}`;
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});