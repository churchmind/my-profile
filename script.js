// ========================================
// MOBILE MENU TOGGLE
// ========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// CONTACT FORM HANDLING
// ========================================

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[placeholder="Your Name"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[placeholder="Your Email"]').value;
        const message = formData.get('message') || contactForm.querySelector('textarea[placeholder="Your Message"]').value;

        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }

        // Send email using formspree or similar service
        try {
            const response = await fetch('https://formspree.io/f/xyzabc', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    _replyto: email
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                showNotification('Failed to send message. Please try again.', 'error');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            // Fallback: Show success message and prepare email link
            showNotification('Message prepared. Opening your email client...', 'info');
            window.location.href = `mailto:alfredubandoma1@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\n---\nFrom: ' + email)}`;
        }
    });
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        background-color: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 500px;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

// Observe elements for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, project cards, and other elements
document.querySelectorAll('.service-card, .project-card, .cert-card, .skill-category').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// ADD STYLES FOR ANIMATIONS
// ========================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(20px);
        }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
        body {
            background-color: #0f172a;
            color: #f1f5f9;
        }

        .navbar {
            background: rgba(15, 23, 42, 0.95);
        }

        .nav-menu a {
            color: #f1f5f9;
        }

        .nav-menu {
            background: #1e293b;
        }

        .hero {
            background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        }

        .hero h1 {
            color: #f1f5f9;
        }

        .about {
            background: #1e293b;
        }

        .about-text p {
            color: #cbd5e1;
        }

        .info-item {
            color: #f1f5f9;
        }

        .about-text {
            color: #f1f5f9;
        }

        .skills {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }

        .skill-category {
            background: #0f172a;
            color: #f1f5f9;
        }

        .skill-category h3 {
            color: #3b82f6;
        }

        .progress-bar {
            background: #334155;
        }

        .creative-skills li {
            color: #f1f5f9;
        }

        .experience {
            background: #0f172a;
        }

        .timeline::before {
            background: #3b82f6;
        }

        .timeline-marker {
            background: #3b82f6;
            border-color: #0f172a;
        }

        .timeline-content {
            background: #1e293b;
            color: #f1f5f9;
        }

        .timeline-content h3 {
            color: #f1f5f9;
        }

        .company {
            color: #3b82f6;
        }

        .period {
            color: #94a3b8;
        }

        .description {
            color: #cbd5e1;
        }

        .projects {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }

        .project-card {
            background: #0f172a;
        }

        .project-info {
            color: #f1f5f9;
        }

        .project-info h3 {
            color: #f1f5f9;
        }

        .project-info p {
            color: #cbd5e1;
        }

        .tag {
            background: rgba(59, 130, 246, 0.2);
            color: #93c5fd;
        }

        .services {
            background: #0f172a;
        }

        .service-card {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }

        .service-card h3 {
            color: #f1f5f9;
        }

        .service-card p {
            color: #cbd5e1;
        }

        .certifications {
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }

        .cert-card {
            background: #0f172a;
            color: #f1f5f9;
        }

        .cert-card h3 {
            color: #f1f5f9;
        }

        .cert-card p {
            color: #3b82f6;
        }

        .contact {
            background: #0f172a;
        }

        .contact h2 {
            color: #f1f5f9;
        }

        .contact-item h3 {
            color: #3b82f6;
        }

        .contact-item {
            color: #f1f5f9;
        }

        .contact-item a {
            color: #93c5fd;
        }

        .contact-form input,
        .contact-form textarea {
            background: #1e293b;
            color: #f1f5f9;
            border-color: #334155;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
        }

        h2 {
            color: #f1f5f9;
        }

        h3 {
            color: #f1f5f9;
        }

        .badge {
            background: rgba(59, 130, 246, 0.1);
            border-color: rgba(59, 130, 246, 0.3);
            color: #93c5fd;
        }

        .hero p {
            color: #cbd5e1;
        }
    }
`;
document.head.appendChild(style);

// ========================================
// PAGE LOAD ANIMATION
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
