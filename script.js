// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Sticky header shadow on scroll
    const header = document.querySelector('.main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Initialize lightGallery for main gallery
    const mainGallery = document.getElementById('main-gallery');
    if (mainGallery) {
        lightGallery(mainGallery, {
            plugins: [lgZoom, lgThumbnail, lgFullscreen, lgShare],
            speed: 500,
            thumbnail: true,
            animateThumb: true,
            zoomFromOrigin: false,
            allowMediaOverlap: true,
            toggleThumb: true,
            thumbnailPluginStrings: {
                toggleThumbnails: 'Toggle thumbnails'
            },
            share: true,
            sharePluginStrings: {
                share: 'Share'
            },
            zoom: true,
            scale: 1,
            enableDrag: true,
            enableSwipe: true,
            closable: true,
            escKey: true,
            keyPress: true,
            controls: true,
            slideEndAnimation: true,
            hideControlOnEnd: false,
            mousewheel: true,
            getCaptionFromTitleOrAlt: true,
            appendSubHtmlTo: '.lg-sub-html',
            subHtmlSelectorRelative: false,
            preload: 2,
            showZoomInOutIcons: true,
            actualSize: true,
            enableDrag: true,
            enableSwipe: true,
            swipeThreshold: 50,
            enableTouch: true,
            touchSwipeThreshold: 50,
            pullCaptionDelay: 0,
            enableInfiniteScroll: true,
            progressBar: true,
            appendCounterTo: '.lg-toolbar',
            counter: true,
            addClass: 'lg-boat-gallery'
        });
    }

    // Initialize lightGallery for construction gallery
    const constructionGallery = document.getElementById('construction-gallery');
    if (constructionGallery) {
        lightGallery(constructionGallery, {
            plugins: [lgZoom, lgThumbnail, lgFullscreen, lgShare],
            speed: 500,
            thumbnail: true,
            animateThumb: true,
            zoomFromOrigin: false,
            allowMediaOverlap: true,
            toggleThumb: true,
            share: true,
            zoom: true,
            scale: 1,
            enableDrag: true,
            enableSwipe: true,
            closable: true,
            escKey: true,
            keyPress: true,
            controls: true,
            slideEndAnimation: true,
            hideControlOnEnd: false,
            mousewheel: true,
            getCaptionFromTitleOrAlt: true,
            appendSubHtmlTo: '.lg-sub-html',
            subHtmlSelectorRelative: false,
            preload: 2,
            showZoomInOutIcons: true,
            actualSize: true,
            enableDrag: true,
            enableSwipe: true,
            swipeThreshold: 50,
            enableTouch: true,
            touchSwipeThreshold: 50,
            pullCaptionDelay: 0,
            enableInfiniteScroll: true,
            progressBar: true,
            appendCounterTo: '.lg-toolbar',
            counter: true,
            addClass: 'lg-construction-gallery'
        });
    }

    // Initialize Masonry
    const grid = document.querySelector('.gallery-grid');
    if (grid) {
        imagesLoaded(grid, function() {
            new Masonry(grid, {
                itemSelector: '.gallery-item',
                columnWidth: '.gallery-item',
                percentPosition: true
            });
        });
    }

    // Initialize Hero Carousel
    let heroSlideIndex = 1;
    let heroTimer = null;
    
    function showHeroSlide(n) {
        let slides = document.querySelectorAll('.hero-slide');
        let indicators = document.querySelectorAll('.hero-indicator');
        
        if (n > slides.length) { heroSlideIndex = 1 }
        if (n < 1) { heroSlideIndex = slides.length }
        
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        if (slides[heroSlideIndex - 1]) {
            slides[heroSlideIndex - 1].classList.add('active');
        }
        
        if (indicators[heroSlideIndex - 1]) {
            indicators[heroSlideIndex - 1].classList.add('active');
        }
    }
    
    function resetHeroTimer() {
        if (heroTimer) {
            clearInterval(heroTimer);
        }
        heroTimer = setInterval(() => {
            if (document.querySelector('.hero-carousel-section')) {
                changeHeroSlide(1);
            }
        }, 5000);
    }
    
    window.changeHeroSlide = function(n) {
        showHeroSlide(heroSlideIndex += n);
        resetHeroTimer(); // Reset timer when manually navigating
    }
    
    window.currentHeroSlide = function(n) {
        showHeroSlide(heroSlideIndex = n);
        resetHeroTimer(); // Reset timer when manually navigating
    }
    
    // Initialize auto-advance hero carousel
    resetHeroTimer();
    
    // Touch support for hero carousel
    const heroCarousel = document.querySelector('.hero-carousel-section');
    if (heroCarousel) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        heroCarousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        heroCarousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 50) {
                changeHeroSlide(1); // Swipe left - next slide
            }
            if (touchEndX > touchStartX + 50) {
                changeHeroSlide(-1); // Swipe right - previous slide
            }
        });
    }

    // Renovation Carousel
    let renovationSlideIndex = 1;
    let renovationTimer;
    
    function showRenovationSlide(n) {
        const slides = document.querySelectorAll('.renovation-slide');
        const indicators = document.querySelectorAll('.renovation-carousel-container .carousel-indicator');
        
        if (!slides.length) return;
        
        if (n > slides.length) { renovationSlideIndex = 1; }
        if (n < 1) { renovationSlideIndex = slides.length; }
        
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        if (slides[renovationSlideIndex - 1]) {
            slides[renovationSlideIndex - 1].classList.add('active');
        }
        if (indicators[renovationSlideIndex - 1]) {
            indicators[renovationSlideIndex - 1].classList.add('active');
        }
    }
    
    function resetRenovationTimer() {
        clearInterval(renovationTimer);
        renovationTimer = setInterval(() => {
            renovationSlideIndex++;
            showRenovationSlide(renovationSlideIndex);
        }, 4000);
    }
    
    window.changeRenovationSlide = function(n) {
        showRenovationSlide(renovationSlideIndex += n);
        resetRenovationTimer();
    }
    
    window.currentRenovationSlide = function(n) {
        showRenovationSlide(renovationSlideIndex = n);
        resetRenovationTimer();
    }
    
    // Initialize renovation carousel if container exists
    if (document.querySelector('.renovation-carousel-container')) {
        resetRenovationTimer();
    }

    // Window View Carousel
    let windowSlideIndex = 1;
    let windowTimer;
    
    function showWindowSlide(n) {
        const slides = document.querySelectorAll('.window-slide');
        const indicators = document.querySelectorAll('.window-carousel-container .carousel-indicator');
        
        if (!slides.length) return;
        
        if (n > slides.length) { windowSlideIndex = 1; }
        if (n < 1) { windowSlideIndex = slides.length; }
        
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        if (slides[windowSlideIndex - 1]) {
            slides[windowSlideIndex - 1].classList.add('active');
        }
        if (indicators[windowSlideIndex - 1]) {
            indicators[windowSlideIndex - 1].classList.add('active');
        }
    }
    
    function resetWindowTimer() {
        clearInterval(windowTimer);
        windowTimer = setInterval(() => {
            windowSlideIndex++;
            showWindowSlide(windowSlideIndex);
        }, 3500);
    }
    
    window.changeWindowSlide = function(n) {
        showWindowSlide(windowSlideIndex += n);
        resetWindowTimer();
    }
    
    window.currentWindowSlide = function(n) {
        showWindowSlide(windowSlideIndex = n);
        resetWindowTimer();
    }
    
    // Initialize window carousel if container exists
    if (document.querySelector('.window-carousel-container')) {
        resetWindowTimer();
    }

    // Touch support for renovation carousel
    const renovationCarousel = document.querySelector('.renovation-carousel-container');
    if (renovationCarousel) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        renovationCarousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        renovationCarousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 50) {
                changeRenovationSlide(1); // Swipe left - next slide
            }
            if (touchEndX > touchStartX + 50) {
                changeRenovationSlide(-1); // Swipe right - previous slide
            }
        });
    }

    // Touch support for window carousel
    const windowCarousel = document.querySelector('.window-carousel-container');
    if (windowCarousel) {
        let touchStartX = 0;
        let touchEndX = 0;
        
        windowCarousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        windowCarousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            if (touchEndX < touchStartX - 50) {
                changeWindowSlide(1); // Swipe left - next slide
            }
            if (touchEndX > touchStartX + 50) {
                changeWindowSlide(-1); // Swipe right - previous slide
            }
        });
    }

    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for animations
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

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.gallery-item, .spec-item, .renovation-item, .feature-demo, .construction-item, .timeline-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Contact button functionality
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            // Add a small animation to show the button was clicked
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // CTA button in hero section
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Scroll to contact section
            const contactSection = document.querySelector('.pricing-contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Add a pulse effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero && scrolled < hero.offsetHeight) {
            const rate = scrolled * -0.2;
            hero.style.backgroundPosition = `center ${rate}px`;
        }
    });

    // Feature tags hover effect
    const featureTags = document.querySelectorAll('.feature-tag');
    featureTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
            this.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.3)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });

    // Timeline items hover effect
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const label = this.querySelector('.timeline-label');
            if (label) {
                label.style.transform = 'scale(1.1)';
                label.style.background = '#2980b9';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const label = this.querySelector('.timeline-label');
            if (label) {
                label.style.transform = '';
                label.style.background = '#3498db';
            }
        });
    });

    // Add loading animation for the page
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';

    // Copy email to clipboard functionality
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const email = this.href.replace('mailto:', '');
            copyEmail(email);
            
            // Also open default email client after a short delay
            setTimeout(() => {
                window.location.href = this.href;
            }, 500);
        });
    });

    // Progress bar animation on scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                progressBar.style.width = progress + '%';
            }
        });
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });

    // Enhanced gallery item interactions
    const galleryItems = document.querySelectorAll('.gallery-item, .construction-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });

    // Mobile nav toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-open');
            mobileNavToggle.classList.toggle('is-active');
            const isOpen = mainNav.classList.contains('mobile-open');
            document.body.style.overflow = isOpen ? 'hidden' : '';
            document.documentElement.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close mobile nav when a link is clicked
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('mobile-open')) {
                    mainNav.classList.remove('mobile-open');
                    mobileNavToggle.classList.remove('is-active');
                    document.body.style.overflow = '';
                    document.documentElement.style.overflow = '';
                }
            });
        });
    }
});

// Initialize body with opacity 0 for fade-in effect
document.body.style.opacity = '0';

// Copy email to clipboard functionality
function copyEmail(email) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(function() {
            showToast('Email copied to clipboard!');
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Email copied to clipboard!');
    }
}

// Simple toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #2ecc71;
        color: white;
        padding: 15px 25px;
        border-radius: 25px;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => {
            if (document.body.contains(toast)) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Lazy loading for images (fallback for older browsers)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Call lazy loading
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}


document.title = 'Beautiful Narrowboat for Sale - London';

// Add page visibility change handling
// document.addEventListener('visibilitychange', function() {
//     if (document.hidden) {
//         // Page is hidden
//         document.title = 'Come back! - Narrowboat for Sale';
//     } else {
//         // Page is visible
//         document.title = 'Beautiful Narrowboat for Sale - London';
//     }
// });

// Enhanced keyboard navigation
document.addEventListener('keydown', function(e) {
    // Add custom keyboard shortcuts
    if (e.key === 'g' && !e.ctrlKey && !e.metaKey) {
        // Press 'g' to scroll to gallery
        const gallery = document.querySelector('.gallery-section');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
        // Press 'c' to scroll to contact
        const contact = document.querySelector('.pricing-contact');
        if (contact) {
            contact.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

 