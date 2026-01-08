// ============================================
        // MENU MOBILE TOGGLE
        // ============================================
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav');
        
        burger.addEventListener('click', () => {
            const isOpen = nav.classList.toggle('open');
            burger.setAttribute('aria-expanded', isOpen);
            burger.textContent = isOpen ? '✕' : '☰';
        });

        // Fermer le menu au clic sur un lien
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
                burger.textContent = '☰';
            });
        });

        // ============================================
        // HEADER SCROLL EFFECT
        // ============================================
        const header = document.querySelector('.header');
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            lastScroll = currentScroll;
        });

        // ============================================
        // SMOOTH SCROLL POUR LES ANCRES
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
        // INTERSECTION OBSERVER POUR ANIMATIONS
        // ============================================
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, observerOptions);

        // Observer les éléments à animer
        document.querySelectorAll('.service-card, .tarif-card, .feature-card, .gallery-item').forEach(el => {
            observer.observe(el);
        });