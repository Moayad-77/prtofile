/* ========================================
   ANTIGRAVITY — FLUID JAVASCRIPT
   ======================================== */

document.addEventListener('DOMContentLoaded', function () {

    // ===================== STARFIELD CANVAS =====================
    var sCanvas = document.getElementById('starfield');
    if (sCanvas) {
        var sCtx = sCanvas.getContext('2d');
        var stars = [];

        function resizeStars() {
            sCanvas.width = window.innerWidth;
            sCanvas.height = window.innerHeight;
            stars = [];
            var count = Math.min(200, Math.floor((sCanvas.width * sCanvas.height) / 7000));
            for (var i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * sCanvas.width,
                    y: Math.random() * sCanvas.height,
                    r: Math.random() * 1.5 + 0.2,
                    a: Math.random() * 0.5 + 0.1,
                    s: Math.random() * 0.02 + 0.005,
                    o: Math.random() * 6.28
                });
            }
        }

        function drawStars() {
            sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);
            var t = Date.now() * 0.001;
            for (var i = 0; i < stars.length; i++) {
                var s = stars[i];
                var tw = Math.sin(t * s.s * 10 + s.o) * 0.4 + 0.6;
                sCtx.beginPath();
                sCtx.arc(s.x, s.y, s.r, 0, 6.28);
                sCtx.fillStyle = 'rgba(200, 220, 255, ' + (s.a * tw) + ')';
                sCtx.fill();
            }
            requestAnimationFrame(drawStars);
        }

        resizeStars();
        drawStars();
        window.addEventListener('resize', resizeStars);
    }

    // ===================== DATA PARTICLES (FLUID NODES) =====================
    var pCanvas = document.getElementById('particles-canvas');
    if (pCanvas) {
        var pCtx = pCanvas.getContext('2d');
        var particles = [];
        var mX = -999, mY = -999;

        function resizeParticles() {
            pCanvas.width = window.innerWidth;
            pCanvas.height = window.innerHeight;
            particles = [];
            // Lower count for elegance, longer connection lines
            var count = Math.min(50, Math.floor(pCanvas.width / 25));
            for (var i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * pCanvas.width,
                    y: Math.random() * pCanvas.height,
                    vx: (Math.random() - 0.5) * 0.3,
                    vy: (Math.random() - 0.5) * 0.3,
                    r: Math.random() * 1.5 + 0.5,
                    a: Math.random() * 0.5 + 0.1,
                    type: Math.random() > 0.5 ? 190 : 280 // Cyan or Violet hue
                });
            }
        }

        function drawParticles() {
            pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
            for (var i = 0; i < particles.length; i++) {
                var p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                // Mouse Gravity/Repulsion
                var dx = p.x - mX, dy = p.y - mY;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150 && dist > 0) {
                    var force = (150 - dist) / 150 * 0.5;
                    p.x += (dx / dist) * force;
                    p.y += (dy / dist) * force;
                }

                // Smooth Screen Wrap
                if (p.x < -10) p.x = pCanvas.width + 10;
                if (p.x > pCanvas.width + 10) p.x = -10;
                if (p.y < -10) p.y = pCanvas.height + 10;
                if (p.y > pCanvas.height + 10) p.y = -10;

                pCtx.beginPath();
                pCtx.arc(p.x, p.y, p.r, 0, 6.28);
                pCtx.fillStyle = 'hsla(' + p.type + ', 80%, 60%, ' + p.a + ')';
                pCtx.fill();

                // Connect specific nodes (API simulation)
                for (var j = i + 1; j < particles.length; j++) {
                    var p2 = particles[j];
                    var ddx = p.x - p2.x, ddy = p.y - p2.y;
                    var dd = Math.sqrt(ddx * ddx + ddy * ddy);
                    if (dd < 160) {
                        pCtx.beginPath();
                        pCtx.moveTo(p.x, p.y);
                        pCtx.lineTo(p2.x, p2.y);
                        var alpha = (1 - dd / 160) * 0.15;
                        pCtx.strokeStyle = 'hsla(200, 80%, 60%, ' + alpha + ')';
                        pCtx.lineWidth = 0.5;
                        pCtx.stroke();
                    }
                }
            }
            requestAnimationFrame(drawParticles);
        }

        document.addEventListener('mousemove', function (e) {
            mX = e.clientX;
            mY = e.clientY;
        });

        resizeParticles();
        drawParticles();
        window.addEventListener('resize', resizeParticles);
    }

    // ===================== NAVBAR SCROLL =====================
    var nav = document.getElementById('navbar');
    var menuBtn = document.getElementById('mobile-menu-btn');
    var navMenu = document.getElementById('nav-menu');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    });

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', function () {
            menuBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        var links = document.querySelectorAll('.nav-link');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                menuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        }
    }

    // Smooth Scroll Links
    var anchors = document.querySelectorAll('a[href^="#"]');
    for (var a = 0; a < anchors.length; a++) {
        anchors[a].addEventListener('click', function (e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // ===================== TYPING EFFECT (TERMINAL STYLE) =====================
    var typeEl = document.getElementById('typing');
    if (typeEl) {
        var phrases = [
            "ASP.NET Core Developer",
            "Backend Architect",
            "Building Scalable APIs",
            "System Performance Engineer"
        ];
        var pIdx = 0, cIdx = 0, deleting = false;

        function typingLoop() {
            var txt = phrases[pIdx];
            var speed = deleting ? 30 : 60;

            if (deleting) {
                cIdx--;
            } else {
                cIdx++;
            }

            typeEl.textContent = txt.substring(0, cIdx);

            if (!deleting && cIdx === txt.length) {
                speed = 2500; // Pause at end of sentence
                deleting = true;
            } else if (deleting && cIdx === 0) {
                deleting = false;
                pIdx = (pIdx + 1) % phrases.length;
                speed = 400; // Pause before new sentence
            }

            setTimeout(typingLoop, speed);
        }
        setTimeout(typingLoop, 1500);
    }

    // ===================== SCROLL FADE IN REVEAL =====================
    var fadeEls = document.querySelectorAll('.fade-in');
    function checkReveal() {
        var h = window.innerHeight;
        for (var i = 0; i < fadeEls.length; i++) {
            var el = fadeEls[i];
            var rect = el.getBoundingClientRect();
            if (rect.top < h - 40) {
                el.classList.add('visible');
            }
        }
    }
    checkReveal();
    window.addEventListener('scroll', checkReveal);

    // ===================== 3D TILT EFFECT =====================
    var tiltCards = document.querySelectorAll('.tilt-card');
    for (var i = 0; i < tiltCards.length; i++) {
        (function (card) {
            card.addEventListener('mousemove', function (e) {
                var rect = card.getBoundingClientRect();
                var x = (e.clientX - rect.left) / rect.width - 0.5;
                var y = (e.clientY - rect.top) / rect.height - 0.5;
                // Reverse rotation for a 'floating' feel
                var rX = y * -8;
                var rY = x * 8;
                card.style.transform = 'perspective(800px) rotateX(' + rX + 'deg) rotateY(' + rY + 'deg) translateY(-5px)';
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        })(tiltCards[i]);
    }

    // ===================== FORM FAKE PROGRESS =====================
    var contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function () {
            var btn = document.getElementById('submit-btn');
            if (btn) {
                btn.innerHTML = 'await Task.Delay(); <i class="fas fa-spinner fa-spin"></i>';
                btn.disabled = true;
                btn.style.opacity = '0.7';
            }
        });
    }

    console.log("%cSYSTEM ONLINE: Backend Mode Initiated.", "color: #00ff9d; font-family: monospace; font-size: 14px;");
});
