document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuIcon = document.getElementById("menuIcon");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener("click", () => {
            mobileMenu.classList.toggle("active");
            menuIcon.classList.toggle("open");
        });
    }

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 700,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }
    // Contact Form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const service = document.getElementById('service').value;

            // Simple validation
            if (!name || !email || !phone || !service) {
                alert('Please fill in all required fields.');
                return;
            }

            // WhatsApp Configuration
            // TODO: Replace with your actual WhatsApp number (include country code without +)
            const phoneNumber = "9744342857";

            // Format the message
            const message = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AService: ${service}`;

            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            // Redirect to WhatsApp
            window.open(whatsappUrl, '_blank');

            // Optional: Reset form after opening WhatsApp
            contactForm.reset();
        });
    }
    // Subscribe Button Handling
    const subscribeBtn = document.querySelector('.sub-btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function () {
            const emailInput = subscribeBtn.previousElementSibling;
            const email = emailInput.value.trim();

            if (email) {
                // simple email regex
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailPattern.test(email)) {
                    alert('Thank you for subscribing!');
                    emailInput.value = '';
                } else {
                    alert('Please enter a valid email address.');
                }
            } else {
                alert('Please enter your email to subscribe.');
            }
        });
    }
});

