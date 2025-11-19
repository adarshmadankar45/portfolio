document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav-list');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navList.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navList.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log('Form submitted:', { name, email, subject, message });

            // Create a sweet looking notification
            const notification = document.createElement('div');
            notification.className = 'form-notification';
            notification.innerHTML = `
                <div class="notification-content">
                    <i class="fas fa-check-circle"></i>
                    <p>Thank you for your message! I'll get back to you soon.</p>
                </div>
            `;
            document.body.appendChild(notification);

            // Show notification
            setTimeout(() => {
                notification.classList.add('show');
            }, 100);

            // Hide after 5 seconds
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 5000);

            contactForm.reset();
        });
    }

    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    themeToggle.addEventListener('click', function() {
        document.body.setAttribute('data-theme',
            document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');

        // Change icon
        const icon = themeToggle.querySelector('i');
        if (document.body.getAttribute('data-theme') === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });

    // Initialize particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3b82f6"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#3b82f6",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // Animate elements on scroll
    const animateOnScroll = function() {
    const elements = document.querySelectorAll('.skill-category, .timeline-item');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;

    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top + scrollPosition;

        if (scrollPosition > elementPosition - windowHeight + 100) {
            element.classList.add('visible');
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    });
};

    // Set initial state for animated elements
   // Replace with this:
document.querySelectorAll('.skill-category, .timeline-item').forEach(element => {
    element.style.opacity = '0';
    if (element.classList.contains('skill-category')) {
        // Alternate between left/right animation
        const isOdd = Array.from(document.querySelectorAll('.skill-category')).indexOf(element) % 2 === 0;
        element.style.transform = isOdd ? 'translateX(-100px)' : 'translateX(100px)';
    } else {
        element.style.transform = 'translateY(30px)';
    }
    element.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)';
});

// Then add this to ensure the function runs on page load and resize:
window.addEventListener('load', animateOnScroll);
window.addEventListener('resize', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

    // Run once on page load
    animateOnScroll();

    // Add scroll event listener
    window.addEventListener('scroll', animateOnScroll);

    // Animate skill bars on scroll
    const animateSkillBars = function() {
        const skillBars = document.querySelectorAll('.skill-level');
        const windowHeight = window.innerHeight;

        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const barVisible = 100;

            if (barPosition < windowHeight - barVisible) {
                bar.style.width = bar.parentElement.getAttribute('data-level') || bar.style.width;
            }
        });
    };

    // Set initial width to 0
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        bar.parentElement.setAttribute('data-level', width);
    });

    // Run once on page load
    animateSkillBars();

    // Add scroll event listener
    window.addEventListener('scroll', animateSkillBars);

    // Add floating animation to hero image
    const heroImage = document.querySelector('.image-wrapper');
    if (heroImage) {
        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            heroImage.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset when mouse leaves
        heroImage.parentElement.addEventListener('mouseleave', () => {
            heroImage.style.transform = 'rotateY(0deg) rotateX(0deg)';
        });
    }

    // Add cursor effect
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Add hover effect to links
    const hoverElements = document.querySelectorAll('a, button, .tech-tag');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });

});

// Counter animation for stats
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if(count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Run when counters are in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});

// Debugging helper
console.log("Script loaded successfully");
console.log("Particles loaded:", typeof particlesJS === 'function' ? 'Yes' : 'No');

// Enhanced Form submission with professional modal
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Show professional modal instead of sending email
        showEmailModal(name, email, subject, message);

        // Optional: Log the form data for debugging
        console.log('Form data collected:', { name, email, subject, message });

        // Reset form
        contactForm.reset();
    });
}

// Professional Email Modal Function
function showEmailModal(name, email, subject, message) {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'email-modal-overlay';
    modalOverlay.innerHTML = `
        <div class="email-modal">
            <div class="modal-header">
                <div class="modal-icon">
                    <i class="fas fa-envelope-open-text"></i>
                </div>
                <h3>Message Ready to Send</h3>
                <button class="modal-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>

            <div class="modal-body">
                <div class="success-animation">
                    <div class="checkmark">
                        <div class="check-icon">
                            <i class="fas fa-paper-plane"></i>
                        </div>
                    </div>
                </div>

                <p class="modal-message">Your message has been prepared! To ensure delivery, please send it directly via email.</p>

                <div class="message-preview">
                    <div class="preview-item">
                        <span class="preview-label">From:</span>
                        <span class="preview-value">${name} (${email})</span>
                    </div>
                    <div class="preview-item">
                        <span class="preview-label">Subject:</span>
                        <span class="preview-value">${subject}</span>
                    </div>
                    <div class="preview-item">
                        <span class="preview-label">Message:</span>
                        <span class="preview-value">${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</span>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn btn-secondary" id="copyEmailBtn">
                    <i class="fas fa-copy"></i>
                    Copy Email Address
                </button>
                <a href="mailto:adarshmadan18@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hello Adarsh,\n\nMy name is ${name} (${email}).\n\n${message}\n\nBest regards,\n${name}`)}"
                   class="btn btn-primary" id="openEmailBtn">
                    <i class="fas fa-external-link-alt"></i>
                    Open Email Client
                </a>
            </div>
        </div>
    `;

    // Add to document
    document.body.appendChild(modalOverlay);

    // Show modal with animation
    setTimeout(() => {
        modalOverlay.classList.add('show');
    }, 100);

    // Close modal functionality
    const closeBtn = modalOverlay.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        closeModal(modalOverlay);
    });

    // Close when clicking overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal(modalOverlay);
        }
    });

    // Copy email functionality
    const copyEmailBtn = modalOverlay.querySelector('#copyEmailBtn');
    copyEmailBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('adarshmadan18@gmail.com').then(() => {
            // Show copy confirmation
            const originalText = copyEmailBtn.innerHTML;
            copyEmailBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            copyEmailBtn.style.background = 'var(--secondary-color)';

            setTimeout(() => {
                copyEmailBtn.innerHTML = originalText;
                copyEmailBtn.style.background = '';
            }, 2000);
        });
    });

    // Close with Escape key
    document.addEventListener('keydown', function escClose(e) {
        if (e.key === 'Escape') {
            closeModal(modalOverlay);
            document.removeEventListener('keydown', escClose);
        }
    });
}

function closeModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.remove();
    }, 300);
}
