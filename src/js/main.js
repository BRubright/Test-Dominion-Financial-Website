// Main JavaScript file for Dominion Financial Website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Dominion Financial Website loaded successfully');

    // Smooth scrolling for navigation links
    initSmoothScrolling();

    // Form validation and submission
    initContactForm();

    // Add active class to current navigation item
    initActiveNavigation();
});

/**
 * Initialize smooth scrolling for anchor links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Initialize contact form handling
 */
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (validateForm(name, email, message)) {
                // In a real application, you would send this data to a server
                console.log('Form submitted:', { name, email, message });
                
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                
                // Reset form
                contactForm.reset();
            }
        });
    }
}

/**
 * Validate contact form fields
 * @param {string} name - User's name
 * @param {string} email - User's email
 * @param {string} message - User's message
 * @returns {boolean} - Whether the form is valid
 */
function validateForm(name, email, message) {
    // Check if fields are not empty
    if (!name.trim() || !email.trim() || !message.trim()) {
        alert('Please fill in all fields');
        return false;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Check message length
    if (message.trim().length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }
    
    return true;
}

/**
 * Add active class to navigation items based on scroll position
 */
function initActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    window.addEventListener('scroll', function() {
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        initSmoothScrolling,
        initContactForm,
        initActiveNavigation
    };
}
