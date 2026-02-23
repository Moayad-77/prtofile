/* ========================================
   ANTIGRAVITY — JavaScript
   ======================================== */
document.addEventListener('DOMContentLoaded', function () {

    // ===================== STAR FIELD =====================
    var starCanvas = document.getElementById('starfield');
    if (starCanvas) {
        var sCtx = starCanvas.getContext('2d');
        var stars = [];

        function resizeStars() {
            starCanvas.width = window.innerWidth;
            starCanvas.height = window.innerHeight;
            stars = [];
            var count = Math.min(250, Math.floor((starCanvas.width * starCanvas.height) / 6000));
            for (var i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * starCanvas.width,
                    y: Math.random() * starCanvas.height,
                    r: Math.random() * 1.5 + 0.3,
                    a: Math.random() * 0.6 + 0.2,
                    s: Math.random() * 0.03 + 0.005,
                    o: Math.random() * 6.28
                });
            }
        }

        function drawStars() {
            sCtx.clearRect(0, 0, starCanvas.width, starCanvas.height);
            var t = Date.now() * 0.001;
            for (var i = 0; i < stars.length; i++) {
                var s = stars[i];
                var tw = Math.sin(t * s.s * 10 + s.o) * 0.35 + 0.65;
                var al = s.a * tw;
                sCtx.beginPath();
                sCtx.arc(s.x, s.y, s.r, 0, 6.28);
                sCtx.fillStyle = 'rgba(200,220,255,' + al + ')';
                sCtx.fill();
                if (s.r > 1) {
                    sCtx.beginPath();
                    sCtx.arc(s.x, s.y, s.r * 3, 0, 6.28);
                    sCtx.fillStyle = 'rgba(150,200,255,' + (al * 0.08) + ')';
                    sCtx.fill();
                }
            }
            requestAnimationFrame(drawStars);
        }

        resizeStars();
        drawStars();
        window.addEventListener('resize', resizeStars);
    }

    // ===================== PARTICLES =====================
    var pCanvas = document.getElementById('particles-canvas');
    if (pCanvas) {
        var pCtx = pCanvas.getContext('2d');
        var particles = [];
        var mouseX = -999, mouseY = -999;

        function resizeParticles() {
            pCanvas.width = window.innerWidth;
            pCanvas.height = window.innerHeight;
            particles = [];
            var count = Math.min(80, Math.floor(pCanvas.width / 18));
            for (var i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * pCanvas.width,
                    y: Math.random() * pCanvas.height,
                    vx: (Math.random() - 0.5) * 0.4,
                    vy: (Math.random() - 0.5) * 0.4,
                    r: Math.random() * 2.5 + 0.5,
                    a: Math.random() * 0.4 + 0.15,
                    h: Math.random() > 0.5 ? 190 : 280
                });
            }
        }

        function drawParticles() {
            pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Mouse repulsion
                var dx = p.x - mouseX, dy = p.y - mouseY;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150 && dist > 0) {
                    var force = (150 - dist) / 150 * 0.6;
                    p.x += (dx / dist) * force;
                    p.y += (dy / dist) * force;
                }

                // Wrap
                if (p.x < -10) p.x = pCanvas.width + 10;
                if (p.x > pCanvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = pCanvas.height + 10;
                if (p.y > pCanvas.height + 10) p.y = -10;

                // Draw
                pCtx.beginPath();
                pCtx.arc(p.x, p.y, p.r, 0, 6.28);
                pCtx.fillStyle = 'hsla(' + p.h + ',80%,70%,' + p.a + ')';
                pCtx.fill();

                // Connect lines
                for (var j = i + 1; j < particles.length; j++) {
                    var p2 = particles[j];
                    var ddx = p.x - p2.x, ddy = p.y - p2.y;
                    var dd = Math.sqrt(ddx * ddx + ddy * ddy);
                    if (dd < 130) {
                        pCtx.beginPath();
                        pCtx.moveTo(p.x, p.y);
                        pCtx.lineTo(p2.x, p2.y);
                        pCtx.strokeStyle = 'hsla(200,80%,60%,' + ((1 - dd / 130) * 0.1) + ')';
                        pCtx.lineWidth = 0.6;
                        pCtx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }

        document.addEventListener('mousemove', function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        resizeParticles();
        drawParticles();
        window.addEventListener('resize', resizeParticles);
    }

    // ===================== NAVBAR =====================
    var navbar = document.getElementById('navbar');
    var menuBtn = document.getElementById('mobile-menu-btn');
    var navMenu = document.getElementById('nav-menu');

    window.addEventListener('scroll', function () {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        var navLinks = document.querySelectorAll('.nav-link');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function () {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        }
    }

    // Smooth scroll
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // ===================== TYPING EFFECT =====================
    var typingEl = document.getElementById('typing');
    if (typingEl) {
        var roles = [
            'gravity-defying experiences',
            'AI-powered solutions',
            'full-stack architectures',
            'intelligent web apps',
            'the future of code'
        ];
        var ri = 0, ci = 0, deleting = false;

        function typeLoop() {
            var role = roles[ri];
            var speed;
            if (deleting) {
                ci--;
                speed = 30;
            } else {
                ci++;
                speed = 70;
            }
            typingEl.textContent = role.substring(0, ci);

            if (!deleting && ci === role.length) {
                speed = 2000;
                deleting = true;
            } else if (deleting && ci === 0) {
                deleting = false;
                ri = (ri + 1) % roles.length;
                speed = 300;
            }
            setTimeout(typeLoop, speed);
        }

        setTimeout(typeLoop, 1500);
    }

    // ===================== SCROLL REVEAL =====================
    var fadeEls = document.querySelectorAll('.fade-in');

    function checkFadeIn() {
        for (var i = 0; i < fadeEls.length; i++) {
            var el = fadeEls[i];
            var rect = el.getBoundingClientRect();
            var windowH = window.innerHeight;
            if (rect.top < windowH - 40) {
                el.classList.add('visible');
            }
        }
    }

    // Run immediately + on scroll
    checkFadeIn();
    window.addEventListener('scroll', checkFadeIn);
    window.addEventListener('resize', checkFadeIn);

    // ===================== SKILL BARS =====================
    var barFills = document.querySelectorAll('.bar-fill');
    var skillsSection = document.getElementById('skills');
    var barsAnimated = false;

    function checkBars() {
        if (barsAnimated || !skillsSection) return;
        var rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            barsAnimated = true;
            for (var i = 0; i < barFills.length; i++) {
                var bar = barFills[i];
                var w = bar.getAttribute('data-width');
                bar.style.setProperty('--w', w);
                // Small delay for stagger
                (function (b, delay) {
                    setTimeout(function () {
                        b.classList.add('go');
                    }, delay);
                })(bar, i * 120);
            }
        }
    }

    checkBars();
    window.addEventListener('scroll', checkBars);

    // ===================== STAT COUNTERS =====================
    var statNums = document.querySelectorAll('.stat-num');
    var aboutSection = document.getElementById('about');
    var statsAnimated = false;

    function checkStats() {
        if (statsAnimated || !aboutSection) return;
        var rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            statsAnimated = true;
            for (var i = 0; i < statNums.length; i++) {
                animateNumber(statNums[i]);
            }
        }
    }

    function animateNumber(el) {
        var target = parseInt(el.getAttribute('data-target'));
        var duration = 1800;
        var startTime = null;
        function step(ts) {
            if (!startTime) startTime = ts;
            var progress = Math.min((ts - startTime) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * eased);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target;
            }
        }
        requestAnimationFrame(step);
    }

    checkStats();
    window.addEventListener('scroll', checkStats);

    // ===================== TILT EFFECT =====================
    var cards = document.querySelectorAll('.glass-card, .skill-card, .info-card, .stat-box');
    for (var i = 0; i < cards.length; i++) {
        (function (card) {
            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var x = (e.clientX - rect.left) / rect.width - 0.5;
                var y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = 'perspective(600px) rotateX(' + (y * -5) + 'deg) rotateY(' + (x * 5) + 'deg) translateY(-4px)';
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        })(cards[i]);
    }

    // ===================== SCROLL INDICATOR FADE =====================
    var scrollHint = document.querySelector('.scroll-hint');
    if (scrollHint) {
        window.addEventListener('scroll', function () {
            scrollHint.style.opacity = window.scrollY > 80 ? '0' : '1';
        });
    }

    // ===================== CONTACT FORM =====================
    var form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function () {
            var btn = document.getElementById('submit-btn');
            if (btn) {
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
                btn.disabled = true;
                btn.style.opacity = '0.6';
            }
        });
    }

    // ===================== DONE =====================
    console.log('%c✦ Antigravity Portfolio Loaded ✦', 'color:#00f0ff;font-size:14px;font-weight:bold');

});
