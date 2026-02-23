/* ========================================
   ANTIGRAVITY PORTFOLIO — JavaScript
   Interactive, physics-defying experience
   ======================================== */

// ============ STAR FIELD ============
(function () {
    const canvas = document.getElementById('star-field');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createStars();
    }

    function createStars() {
        stars = [];
        const count = Math.floor((canvas.width * canvas.height) / 8000);
        for (let i = 0; i < count; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.3,
                alpha: Math.random() * 0.5 + 0.2,
                speed: Math.random() * 0.02 + 0.005,
                offset: Math.random() * Math.PI * 2,
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const t = Date.now() * 0.001;
        for (const s of stars) {
            const twinkle = Math.sin(t * s.speed * 10 + s.offset) * 0.3 + 0.7;
            const a = s.alpha * twinkle;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(200, 220, 255, ${a})`;
            ctx.fill();
            if (s.size > 1.2) {
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.size * 2.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(150, 200, 255, ${a * 0.06})`;
                ctx.fill();
            }
        }
        requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
})();

// ============ HERO PARTICLES ============
(function () {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mx = -1000, my = -1000;

    function resize() {
        const hero = document.getElementById('hero');
        if (!hero) return;
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
        create();
    }

    function create() {
        particles = [];
        const count = Math.min(60, Math.floor(canvas.width / 20));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 2 + 0.5,
                alpha: Math.random() * 0.35 + 0.1,
                hue: Math.random() > 0.6 ? 280 : 190,
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;

            // Mouse repulsion
            const dx = p.x - mx, dy = p.y - my;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 120 && d > 0) {
                const f = (120 - d) / 120 * 0.4;
                p.x += (dx / d) * f;
                p.y += (dy / d) * f;
            }

            // Wrap
            if (p.x < -5) p.x = canvas.width + 5;
            if (p.x > canvas.width + 5) p.x = -5;
            if (p.y < -5) p.y = canvas.height + 5;
            if (p.y > canvas.height + 5) p.y = -5;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${p.hue}, 80%, 70%, ${p.alpha})`;
            ctx.fill();

            // Lines
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const ddx = p.x - p2.x, ddy = p.y - p2.y;
                const dd = Math.sqrt(ddx * ddx + ddy * ddy);
                if (dd < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `hsla(200, 80%, 60%, ${(1 - dd / 100) * 0.06})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }

    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mx = e.clientX - rect.left;
        my = e.clientY - rect.top;
    });

    resize();
    draw();
    window.addEventListener('resize', resize);
})();

// ============ NAVIGATION ============
(function () {
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    // Scroll styling
    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile menu
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
})();

// ============ TYPING EFFECT ============
(function () {
    const el = document.getElementById('typing-text');
    if (!el) return;

    const roles = [
        'gravity-defying experiences',
        'AI-powered solutions',
        'full-stack architectures',
        'intelligent web apps',
        'the future of code'
    ];
    let ri = 0, ci = 0, deleting = false, speed = 80;

    function type() {
        const role = roles[ri];
        if (deleting) {
            ci--;
            speed = 35;
        } else {
            ci++;
            speed = 75;
        }
        el.textContent = role.substring(0, ci);

        if (!deleting && ci === role.length) {
            speed = 2200;
            deleting = true;
        } else if (deleting && ci === 0) {
            deleting = false;
            ri = (ri + 1) % roles.length;
            speed = 350;
        }
        setTimeout(type, speed);
    }

    setTimeout(type, 1500);
})();

// ============ TILT EFFECT ============
(function () {
    document.querySelectorAll('[data-tilt]').forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(600px) rotateX(${y * -6}deg) rotateY(${x * 6}deg) translateY(-3px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });
})();

// ============ PARALLAX ============
(function () {
    const orbs = document.querySelectorAll('[data-parallax]');
    if (orbs.length === 0) return;

    window.addEventListener('scroll', () => {
        const sy = window.scrollY;
        orbs.forEach(el => {
            const s = parseFloat(el.dataset.parallax);
            el.style.transform = `translateY(${sy * s}px)`;
        });
    });
})();

// ============ SECTION REVEAL ============
(function () {
    const items = document.querySelectorAll(
        '.section-header, .info-block, .stat-orb, .skill-planet, .mothership-project, .project-capsule, .contact-beacon, .contact-transmitter'
    );

    if (!items.length) return;

    items.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Stagger siblings
                const parent = entry.target.parentElement;
                if (parent) {
                    const siblings = parent.querySelectorAll('.reveal:not(.revealed)');
                    siblings.forEach((sib, i) => {
                        setTimeout(() => sib.classList.add('revealed'), i * 80);
                    });
                } else {
                    entry.target.classList.add('revealed');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });

    items.forEach(el => observer.observe(el));
})();

// ============ SKILL BARS ============
(function () {
    const bars = document.querySelectorAll('.planet-bar span');
    const section = document.getElementById('skills');
    if (!section || !bars.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                bars.forEach((bar, i) => {
                    setTimeout(() => bar.classList.add('animated'), i * 120);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(section);
})();

// ============ STAT COUNTERS ============
(function () {
    const nums = document.querySelectorAll('.stat-number');
    const section = document.getElementById('about');
    if (!section || !nums.length) return;

    function animate(el) {
        const target = parseInt(el.dataset.target);
        const duration = 1800;
        const start = performance.now();
        function update(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(target * eased);
            if (p < 1) requestAnimationFrame(update);
            else el.textContent = target;
        }
        requestAnimationFrame(update);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nums.forEach(animate);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.25 });

    observer.observe(section);
})();

// ============ CONTACT FORM ============
(function () {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', () => {
        const btn = document.getElementById('submit-btn');
        if (btn) {
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
            btn.disabled = true;
            btn.style.opacity = '0.6';
        }
    });
})();

// ============ SCROLL INDICATOR FADE ============
(function () {
    const ind = document.getElementById('scroll-indicator');
    if (!ind) return;
    window.addEventListener('scroll', () => {
        ind.style.opacity = window.scrollY > 80 ? '0' : '1';
    });
})();

// ============ COSMIC DUST ============
(function () {
    const container = document.getElementById('cosmic-dust');
    if (!container) return;

    // Add float keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dustDrift {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            15% { opacity: 1; }
            85% { opacity: 0.8; }
            100% { transform: translateY(-300px) translateX(80px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    for (let i = 0; i < 25; i++) {
        const d = document.createElement('div');
        const size = Math.random() * 2.5 + 0.5;
        d.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(200, 220, 255, ${Math.random() * 0.25 + 0.05});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: dustDrift ${Math.random() * 25 + 15}s linear infinite;
            animation-delay: ${-Math.random() * 20}s;
            pointer-events: none;
        `;
        container.appendChild(d);
    }
})();

// ============ READY ============
console.log('%c✦ Antigravity Portfolio Loaded ✦',
    'color: #00f0ff; font-size: 14px; font-weight: bold;');
