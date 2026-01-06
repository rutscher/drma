// ============================================
// GRVL DRMA - The Most Over-Engineered JavaScript
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen();
    initParticles();
    initBikeMatrix();
    initCursorTrail();
    initKonamiCode();
    initThemeSwitcher();
    initScrollAnimations();
    initCounterAnimations();
    initProgressBars();
    initConfetti();
    initCustomCursor();
});

// ============================================
// LOADING SCREEN
// ============================================
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadPercent = document.getElementById('load-percent');
    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.classList.add('hidden');
            }, 500);
        }
        loadPercent.textContent = Math.floor(progress);
    }, 150);
}

// ============================================
// PARTICLE SYSTEM
// ============================================
function initParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 5 + 2;
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: var(--particle-color);
        border-radius: 50%;
        left: ${x}px;
        top: ${y}px;
        opacity: ${Math.random() * 0.5 + 0.3};
        box-shadow: 0 0 ${size * 2}px var(--glow-color);
        animation: float-particle ${duration}s ${delay}s infinite ease-in-out;
    `;

    container.appendChild(particle);
}

// Add particle float animation dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes float-particle {
        0%, 100% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(90deg); }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(180deg); }
        75% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) rotate(270deg); }
    }
`;
document.head.appendChild(style);

// ============================================
// BIKE MATRIX RAIN
// ============================================
function initBikeMatrix() {
    const canvas = document.getElementById('bike-matrix');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const bikes = '🚴🚴‍♀️🚵🚵‍♀️🏆✨💎';
    const columns = canvas.width / 20;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * canvas.height;
    }

    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = '16px monospace';

        for (let i = 0; i < drops.length; i++) {
            const bike = bikes[Math.floor(Math.random() * bikes.length)];
            const x = i * 20;
            const y = drops[i];

            ctx.fillStyle = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary').trim();
            ctx.fillText(bike, x, y);

            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i] += 20;
        }
    }

    setInterval(drawMatrix, 50);

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// CURSOR TRAIL
// ============================================
function initCursorTrail() {
    const canvas = document.getElementById('cursor-trail');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const trail = [];
    const maxTrailLength = 20;

    document.addEventListener('mousemove', (e) => {
        trail.push({ x: e.clientX, y: e.clientY, life: maxTrailLength });

        if (trail.length > maxTrailLength) {
            trail.shift();
        }
    });

    function drawTrail() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        trail.forEach((point, index) => {
            const opacity = point.life / maxTrailLength;
            const size = (point.life / maxTrailLength) * 10;

            ctx.beginPath();
            ctx.arc(point.x, point.y, size, 0, Math.PI * 2);

            const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, size);
            const color = getComputedStyle(document.documentElement)
                .getPropertyValue('--primary').trim();

            gradient.addColorStop(0, `${color}${Math.floor(opacity * 255).toString(16)}`);
            gradient.addColorStop(1, 'transparent');

            ctx.fillStyle = gradient;
            ctx.fill();

            point.life--;
        });

        // Remove dead points
        for (let i = trail.length - 1; i >= 0; i--) {
            if (trail[i].life <= 0) {
                trail.splice(i, 1);
            }
        }

        requestAnimationFrame(drawTrail);
    }

    drawTrail();

    // Resize handler
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCustomCursor() {
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateCursor() {
        const before = window.getComputedStyle(document.body, '::before');
        document.body.style.setProperty('--mouse-x', mouseX + 'px');
        document.body.style.setProperty('--mouse-y', mouseY + 'px');
        requestAnimationFrame(updateCursor);
    }

    updateCursor();
}

// ============================================
// KONAMI CODE EASTER EGG
// ============================================
function initKonamiCode() {
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase() === 'b' || e.key.toLowerCase() === 'a'
            ? e.key.toLowerCase()
            : e.key;

        if (key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateKonamiMode();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
}

function activateKonamiMode() {
    // Switch to RGB theme
    document.documentElement.setAttribute('data-theme', 'rgb');

    // Show notification
    const notification = document.getElementById('konami-notification');
    notification.classList.remove('hidden');
    notification.classList.add('show');

    // Trigger confetti
    createConfettiBurst(50);

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 500);
    }, 3000);

    // Add extra particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

// ============================================
// THEME SWITCHER
// ============================================
function initThemeSwitcher() {
    const themeButtons = document.querySelectorAll('.theme-btn');

    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);

            // Add visual feedback
            createConfettiBurst(20);
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Parallax effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxLayers = document.querySelectorAll('.parallax-layer');

        parallaxLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.5;
            layer.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// ============================================
// COUNTER ANIMATIONS
// ============================================
function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    updateCounter();
}

// ============================================
// PROGRESS BARS
// ============================================
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.getAttribute('data-progress');
                entry.target.style.width = `${Math.min(progress, 100)}%`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

// ============================================
// CONFETTI SYSTEM
// ============================================
function initConfetti() {
    const explodeBtn = document.getElementById('explode-btn');

    explodeBtn.addEventListener('click', () => {
        createConfettiBurst(100);
    });

    // Also add confetti to register buttons
    const registerBtns = document.querySelectorAll('.register-btn');
    registerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            createConfettiBurst(50);
            // Show alert
            alert('Just kidding! This is a parody website. But wouldn\'t that be something? 💸');
        });
    });
}

function createConfettiBurst(count) {
    const container = document.getElementById('confetti-container');
    const colors = ['#FFD700', '#FFA500', '#FF8C00', '#C0C0C0', '#B9F2FF'];

    for (let i = 0; i < count; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const startX = Math.random() * window.innerWidth;
        const endX = startX + (Math.random() * 200 - 100);
        const rotation = Math.random() * 720;
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        const size = Math.random() * 10 + 5;

        confetti.style.cssText = `
            left: ${startX}px;
            top: -20px;
            background: ${color};
            width: ${size}px;
            height: ${size}px;
            animation: confetti-fall ${duration}s ${delay}s ease-in forwards;
            transform: rotate(${Math.random() * 360}deg);
            box-shadow: 0 0 10px ${color};
        `;

        // Add custom animation
        const keyframes = `
            @keyframes confetti-fall-${i} {
                to {
                    transform: translateY(${window.innerHeight + 50}px) translateX(${endX - startX}px) rotate(${rotation}deg);
                    opacity: 0;
                }
            }
        `;

        const styleSheet = document.createElement('style');
        styleSheet.textContent = keyframes;
        document.head.appendChild(styleSheet);

        confetti.style.animation = `confetti-fall-${i} ${duration}s ${delay}s ease-in forwards`;

        container.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
            styleSheet.remove();
        }, (duration + delay + 0.5) * 1000);
    }
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// EASTER EGGS AND FUN STUFF
// ============================================

// Secret: Triple click the logo
let logoClickCount = 0;
let logoClickTimer;

document.querySelector('.logo-text').addEventListener('click', () => {
    logoClickCount++;
    clearTimeout(logoClickTimer);

    if (logoClickCount === 3) {
        alert('🎉 You found a secret! Here\'s a fun fact: This website has more animations than actual race participants.');
        logoClickCount = 0;
    }

    logoClickTimer = setTimeout(() => {
        logoClickCount = 0;
    }, 500);
});

// Random motivational messages on hover
const motivationalMessages = [
    'Why are you hovering? Go ride your bike!',
    'This button does literally nothing important.',
    'Did you really need 5 theme options? No. But you have them.',
    'Your GPU fan says hello.',
    'This website probably cost more to develop than the race prize pool.',
    'We spent 3 weeks on this gradient. Worth it.',
    'Fun fact: There are 1,337 lines of unnecessary code here.'
];

document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (Math.random() > 0.7) {
            const message = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
            console.log(`🚴 ${message}`);
        }
    });
});

// Log a message to console for developers
console.log('%c🚴 GRVL DRMA 🚴', 'font-size: 40px; font-weight: bold; background: linear-gradient(45deg, #FFD700, #FFA500); -webkit-background-clip: text; color: transparent;');
console.log('%cWelcome to the most over-engineered gravel race website ever created!', 'font-size: 16px; color: #FFD700;');
console.log('%cTry the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 14px; color: #FFA500;');
console.log('%cOr triple-click the logo for a surprise!', 'font-size: 14px; color: #FF8C00;');
console.log('%c', 'font-size: 12px; color: #999;');
console.log('Built with: Way too much time, excessive caffeine, and questionable life choices.');
console.log('Technologies: Vanilla JS, CSS3, HTML5, Hubris, and Memes');
console.log('Performance: Optimized for maximum GPU fan noise');
console.log('');
console.log('Want to contribute to this monstrosity? Please don\'t.');

// ============================================
// PERFORMANCE MONITOR (Because why not?)
// ============================================
if (performance && performance.memory) {
    setInterval(() => {
        const memory = performance.memory;
        const used = (memory.usedJSHeapSize / 1048576).toFixed(2);
        const total = (memory.totalJSHeapSize / 1048576).toFixed(2);

        if (Math.random() > 0.95) {
            console.log(`💾 Memory Usage: ${used} MB / ${total} MB (This website is heavy, we know)`);
        }
    }, 10000);
}

// ============================================
// FINAL TOUCH: Make everything EXTRA
// ============================================
document.body.addEventListener('click', (e) => {
    // Random sparkle effect on click
    if (Math.random() > 0.5) {
        const sparkle = document.createElement('div');
        sparkle.textContent = '✨';
        sparkle.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            font-size: 20px;
            pointer-events: none;
            z-index: 9999;
            animation: sparkle-fade 1s forwards;
        `;

        document.body.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle-fade {
        0% {
            transform: translate(0, 0) scale(1) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(0) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);

console.log('%c🎮 All systems initialized! Enjoy the ride! 🚴', 'font-size: 18px; font-weight: bold; color: #FFD700;');
