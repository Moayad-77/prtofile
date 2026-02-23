/* ========================================
   ANTIGRAVITY PORTFOLIO — JavaScript
   Interactive, physics-defying experience
   ======================================== */

// ============ STAR FIELD (Canvas Background) ============
const starCanvas = document.getElementById('star-field');
const starCtx = starCanvas ? starCanvas.getContext('2d') : null;
let stars = [];
const STAR_COUNT = 200;

function initStarField() {
    if (!starCanvas || !starCtx) return;
    resizeStarCanvas();
    createStars();
    animateStars();
}

function resizeStarCanvas() {
    starCanvas.width = window.innerWidth;
    starCanvas.height = window.innerHeight;
}

function createStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
            x: Math.random() * starCanvas.width,
            y: Math.random() * starCanvas.height,
            size: Math.random() * 1.5 + 0.3,
            opacity: Math.random() * 0.6 + 0.2,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
        });
    }
}

function animateStars() {
    if (!starCtx) return;
    starCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    const time = Date.now() * 0.001;

    stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 10 + star.twinkleOffset) * 0.3 + 0.7;
        const alpha = star.opacity * twinkle;
        starCtx.beginPath();
        starCtx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        starCtx.fillStyle = `rgba(200, 220, 255, ${alpha})`;
        starCtx.fill();

        // Tiny glow
        if (star.size > 1) {
            starCtx.beginPath();
            starCtx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
            starCtx.fillStyle = `rgba(150, 200, 255, ${alpha * 0.08})`;
            starCtx.fill();
        }
    });

    requestAnimationFrame(animateStars);
}

window.addEventListener('resize', () => {
    if (starCanvas) {
        resizeStarCanvas();
        createStars();
    }
});

// ============ HERO PARTICLES (Canvas) ============
const heroCanvas = document.getElementById('hero-particles');
const heroCtx = heroCanvas ? heroCanvas.getContext('2d') : null;
let heroParticles = [];
const HERO_PARTICLE_COUNT = 80;
let mouseX = 0, mouseY = 0;

function initHeroParticles() {
    if (!heroCanvas || !heroCtx) return;
    resizeHeroCanvas();
    createHeroParticles();
    animateHeroParticles();
}

function resizeHeroCanvas() {
    const hero = document.getElementById('hero');
    if (hero) {
        heroCanvas.width = hero.offsetWidth;
        heroCanvas.height = hero.offsetHeight;
    }
}

function createHeroParticles() {
    heroParticles = [];
    for (let i = 0; i < HERO_PARTICLE_COUNT; i++) {
        heroParticles.push({
            x: Math.random() * heroCanvas.width,
            y: Math.random() * heroCanvas.height,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.4 + 0.1,
            hue: Math.random() > 0.7 ? 280 : 190, // violet or cyan
        });
    }
}

function animateHeroParticles() {
    if (!heroCtx) return;
    heroCtx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);

    heroParticles.forEach((p, i) => {
        // Gentle drift
        p.x += p.vx;
        p.y += p.vy;

        // Mouse repulsion (subtle)
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
            const force = (150 - dist) / 150 * 0.5;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
        }

        // Wrap around
        if (p.x < -10) p.x = heroCanvas.width + 10;
        if (p.x > heroCanvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = heroCanvas.height + 10;
        if (p.y > heroCanvas.height + 10) p.y = -10;

        // Draw particle
        heroCtx.beginPath();
        heroCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        heroCtx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.opacity})`;
        heroCtx.fill();

        // Draw connections
        heroParticles.forEach((p2, j) => {
            if (j <= i) return;
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const d = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (d < 120) {
                heroCtx.beginPath();
                heroCtx.moveTo(p.x, p.y);
                heroCtx.lineTo(p2.x, p2.y);
                heroCtx.strokeStyle = `hsla(200, 80%, 60%, ${(1 - d / 120) * 0.08})`;
                heroCtx.lineWidth = 0.5;
                heroCtx.stroke();
            }
        });
    });

    requestAnimationFrame(animateHeroParticles);
}

// Track mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

window.addEventListener('resize', () => {
    if (heroCanvas) {
        resizeHeroCanvas();
        createHeroParticles();
    }
});

// ============ COSMIC DUST (Floating Particles) ============
function initCosmicDust() {
    const container = document.getElementById('cosmic-dust');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const dust = document.createElement('div');
        dust.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: radial-gradient(circle, rgba(200, 220, 255, ${Math.random() * 0.3 + 0.1}), transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: cosmicDustFloat ${Math.random() * 20 + 15}s linear infinite;
            animation-delay: ${-Math.random() * 20}s;
            pointer-events: none;
        `;
        container.appendChild(dust);
    }

    // Add keyframes for cosmic dust
    const style = document.createElement('style');
    style.textContent = `
        @keyframes cosmicDustFloat {
            0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translate(${Math.random() > 0.5 ? '' : '-'}100px, -200px) rotate(360deg); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// ============ NAVBAR ============
const navbar = document.getElementById('navbar');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');

// Scroll effect
window.addEventListener('scroll', () => {
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
});

// Mobile menu
if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ============ TYPING EFFECT ============
const typingElement = document.getElementById('typing-text');
if (typingElement) {
    const roles = [
        'gravity-defying experiences',
        'AI-powered solutions',
        'full-stack architectures',
        'intelligent web apps',
        'the future of code'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeRole() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 2500;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 400;
        }

        setTimeout(typeRole, typingSpeed);
    }

    setTimeout(typeRole, 1800);
}

// ============ TILT EFFECT (Mouse Interaction) ============
function initTiltEffect() {
    const tiltElements = document.querySelectorAll('[data-tilt]');

    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;

            el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            el.style.transition = 'transform 0.1s ease-out';
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
            el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });
}

// ============ PARALLAX SCROLLING ============
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax);
            el.style.transform = `translateY(${scrollY * speed}px)`;
        });

        // Move nebula layers at different speeds
        const nebula1 = document.querySelector('.nebula-1');
        const nebula2 = document.querySelector('.nebula-2');
        if (nebula1) nebula1.style.transform = `translateY(${scrollY * 0.05}px)`;
        if (nebula2) nebula2.style.transform = `translateY(${scrollY * 0.08}px)`;
    });
}

// ============ SECTION REVEAL ANIMATIONS ============
function initRevealAnimations() {
    const revealElements = document.querySelectorAll(
        '.section-header, .info-block, .stat-orb, .skill-planet, .mothership-project, .project-capsule, .contact-beacon, .contact-transmitter'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger reveal for siblings
                const siblings = entry.target.parentElement.querySelectorAll('.reveal');
                const siblingIndex = Array.from(siblings).indexOf(entry.target);
                const delay = siblingIndex * 100;

                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, delay);

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
}

// ============ SKILL BAR ANIMATIONS ============
function initSkillBars() {
    const bars = document.querySelectorAll('.planet-bar span');
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach((bar, i) => {
                    setTimeout(() => {
                        bar.classList.add('animated');
                    }, i * 150);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(skillsSection);
}

// ============ STAT NUMBER COUNTER ============
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const aboutSection = document.getElementById('about');
    if (!aboutSection || statNumbers.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(el => animateNumber(el));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(aboutSection);
}

function animateNumber(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            el.textContent = target;
        }
    }

    requestAnimationFrame(update);
}

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            e.preventDefault();
            return;
        }

        const btn = document.getElementById('submit-btn');
        if (btn) {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
            btn.disabled = true;
            btn.style.opacity = '0.6';
        }
    });
}

// ============ SCROLL INDICATOR HIDE ============
function initScrollIndicator() {
    const indicator = document.getElementById('scroll-indicator');
    if (!indicator) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else {
            indicator.style.opacity = '1';
            indicator.style.pointerEvents = 'auto';
        }
    });
}

// ============ INITIALIZE EVERYTHING ============
document.addEventListener('DOMContentLoaded', () => {
    initStarField();
    initHeroParticles();
    initCosmicDust();
    initTiltEffect();
    initParallax();
    initRevealAnimations();
    initSkillBars();
    initStatCounters();
    initScrollIndicator();

    console.log('%c✦ Antigravity Portfolio Loaded ✦',
        'color: #00f0ff; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px rgba(0,240,255,0.5);');
    console.log('%cDesigned in zero gravity 🚀',
        'color: #a855f7; font-size: 12px;');
});
