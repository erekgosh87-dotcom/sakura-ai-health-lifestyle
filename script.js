document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Dark Mode Toggle ---
    const darkModeBtn = document.createElement('button');
    darkModeBtn.innerHTML = '<i data-lucide="moon"></i>';
    darkModeBtn.className = 'btn glass';
    darkModeBtn.id = 'dark-mode-toggle';
    darkModeBtn.style.position = 'fixed';
    darkModeBtn.style.bottom = '2rem';
    darkModeBtn.style.right = '2rem';
    darkModeBtn.style.zIndex = '2000';
    darkModeBtn.style.padding = '1rem';
    darkModeBtn.style.width = '60px';
    darkModeBtn.style.height = '60px';
    darkModeBtn.style.borderRadius = '50%';
    darkModeBtn.style.display = 'flex';
    darkModeBtn.style.justifyContent = 'center';
    darkModeBtn.style.alignItems = 'center';
    darkModeBtn.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
    document.body.appendChild(darkModeBtn);

    darkModeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        darkModeBtn.innerHTML = isDark ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
        lucide.createIcons();
    });

    // --- Intersection Observer for Fade-up ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });

    // --- Sakura Particles ---
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        const particleCount = 25;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 12 + 8;
            const left = Math.random() * 100;
            const duration = Math.random() * 12 + 8;
            const delay = Math.random() * 10;
            const opacity = Math.random() * 0.4 + 0.2;

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${left}%`;
            particle.style.opacity = opacity;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `-${delay}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    // --- Mouse Parallax for 3D Figures ---
    document.addEventListener('mousemove', (e) => {
        const parallaxEls = document.querySelectorAll('.parallax-3d');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        parallaxEls.forEach(el => {
            const speed = el.getAttribute('data-speed') || 2;
            el.style.transform = `translateX(${x * speed}px) translateY(${y * speed}px)`;
        });
    });

    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
