/**
 * Portfolio Website Scripts
 * Copyright (c) 2026 Zak Levine. All rights reserved.
 */

// Project data for modal
const projectData = {
    1: {
        title: "Brand Identity System",
        description: "A comprehensive brand identity system designed for a cutting-edge tech startup. This project encompasses the complete visual language including logo design, color palette development, typography selection, and comprehensive brand guidelines. The system ensures consistency across all touchpoints and creates a memorable, professional presence in the market.",
        details: [
            "Complete logo design with multiple variations",
            "Comprehensive color palette with usage guidelines",
            "Typography system with primary and secondary fonts",
            "Brand guidelines document (50+ pages)",
            "Application mockups and examples",
            "Digital and print asset templates"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Brand Strategy", "Typography"],
        gradient: "var(--gradient-primary)"
    },
    2: {
        title: "Editorial Magazine Layout",
        description: "A sophisticated magazine design project featuring custom typography, advanced grid systems, and engaging visual narratives. The layout balances readability with visual interest, creating an immersive reading experience that guides readers through complex content with ease and elegance.",
        details: [
            "Custom grid system for consistent layouts",
            "Typography hierarchy for optimal readability",
            "Photo editing and color grading",
            "Infographic design and data visualization",
            "Print-ready file preparation",
            "Digital flipbook version"
        ],
        technologies: ["Adobe InDesign", "Adobe Photoshop", "Typography", "Layout Design", "Print Design"],
        gradient: "var(--gradient-accent-1)"
    },
    3: {
        title: "Packaging Design Collection",
        description: "An innovative packaging series that combines sustainable materials with bold, eye-catching visual design. Each package tells a story while maintaining functionality and environmental responsibility. The design system scales across multiple product lines while maintaining brand cohesion.",
        details: [
            "Eco-friendly material selection",
            "3D mockups and prototypes",
            "Label and typography design",
            "Structural design and die-lines",
            "Sustainable printing specifications",
            "Brand consistency across product line"
        ],
        technologies: ["Adobe Illustrator", "Adobe Dimension", "3D Modeling", "Sustainable Design", "Print Production"],
        gradient: "var(--gradient-accent-2)"
    },
    4: {
        title: "Social Media Campaign",
        description: "A vibrant social media campaign featuring cohesive graphics, motion design, and engaging visual content. The campaign successfully increased brand engagement by 250% through strategic visual storytelling and platform-optimized content delivery.",
        details: [
            "Content strategy and planning",
            "Custom graphics for multiple platforms",
            "Animated posts and stories",
            "Carousel designs and infographics",
            "Video editing and motion graphics",
            "Performance analytics and optimization"
        ],
        technologies: ["Adobe After Effects", "Adobe Premiere", "Figma", "Canva", "Social Media Marketing"],
        gradient: "var(--gradient-accent-3)"
    },
    5: {
        title: "UI/UX Design System",
        description: "A comprehensive design system featuring reusable components, design tokens, and accessibility guidelines. Built to scale across multiple products while maintaining consistency and ensuring an exceptional user experience. Includes detailed documentation and implementation guides.",
        details: [
            "Component library with 100+ elements",
            "Design tokens and style guide",
            "Accessibility compliance (WCAG 2.1 AA)",
            "Interactive prototypes",
            "Developer handoff documentation",
            "Figma and Sketch libraries"
        ],
        technologies: ["Figma", "Sketch", "Adobe XD", "HTML/CSS", "Accessibility", "Design Systems"],
        gradient: "var(--gradient-accent-4)"
    },
    6: {
        title: "Poster Series Design",
        description: "A striking poster collection exploring experimental typography and bold color compositions for art exhibitions. Each poster pushes creative boundaries while maintaining visual impact and clear communication. The series demonstrates mastery of composition, color theory, and typographic expression.",
        details: [
            "Experimental typography techniques",
            "Bold color palette development",
            "Large format print preparation",
            "Conceptual design approach",
            "Exhibition planning and installation",
            "Limited edition print production"
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Typography", "Print Design", "Color Theory"],
        gradient: "var(--gradient-accent-5)"
    }
};

// Modal functionality
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalDetailsList = document.getElementById('modalDetailsList');
const modalTechList = document.getElementById('modalTechList');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

// Open modal
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    modalTitle.textContent = project.title;
    modalImage.style.background = project.gradient;
    modalImage.textContent = `Project ${projectId}`;
    
    modalDescription.innerHTML = `<p>${project.description}</p>`;
    
    modalDetailsList.innerHTML = project.details
        .map(detail => `<li>${detail}</li>`)
        .join('');
    
    modalTechList.innerHTML = project.technologies
        .map(tech => `<span class="tech-tag">${tech}</span>`)
        .join('');
    
    modal.classList.add('active');
    
    // Lock scroll
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.dataset.scrollY = scrollY;
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    
    // Unlock scroll
    const scrollY = document.body.dataset.scrollY;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0'));
    delete document.body.dataset.scrollY;
}

// Event listeners for modal
document.querySelectorAll('.project-link').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project-id');
        openModal(projectId);
    });
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href.includes('project')) return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    const submitBtn = this.querySelector('.submit-btn');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Disable submit button
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Simulate form submission (replace with actual backend integration)
    setTimeout(() => {
        formMessage.className = 'form-message';
        
        // Simulate successful submission
        formMessage.className = 'form-message success';
        formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon.`;
        
        // Clear form
        document.getElementById('contactForm').reset();
        
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
    }, 1500);
    
    // Show loading state
    formMessage.className = 'form-message';
    formMessage.style.display = 'block';
    formMessage.textContent = 'Sending your message...';
});

// Enhanced active state for navigation based on scroll position
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-menu a').forEach(link => {
                    link.style.color = '';
                    link.style.fontWeight = '';
                });
                if (navLink) {
                    navLink.style.color = 'var(--color-primary-light)';
                    navLink.style.fontWeight = 'var(--font-weight-bold)';
                }
            }
        });
    }, 50);
}, { passive: true });

// Optimized Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after animation to improve performance
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards for fade-in animation
document.querySelectorAll('.project-card').forEach(card => {
    animationObserver.observe(card);
});

// Enhanced hover effect for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Smooth scroll to top functionality (optional enhancement)
let scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-to-top';
scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-5px)';
    this.style.boxShadow = '0 8px 20px rgba(99, 102, 241, 0.4)';
});

scrollTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.3)';
});

console.log('Portfolio website loaded successfully! ✨');
