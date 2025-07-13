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

    // Initialize Renovation Gallery
    const renovationContainer = document.getElementById('renovation-gallery-container');
    if (renovationContainer) {
        const renovationGallery = lightGallery(renovationContainer, {
            container: renovationContainer,
            dynamic: true,
            hash: false,
            closable: false,
            showMaximizeIcon: true,
            appendSubHtmlTo: '.lg-item',
            slideDelay: 400,
            dynamicEl: [
                // { src: 'Gallery/construction1.jpg', thumb: 'Gallery/construction1.jpg', subHtml: '<h4>Construction: Framework</h4><p>The internal structure starts to take shape with wooden framing.</p>' },
                // { src: 'Gallery/construction2.jpg', thumb: 'Gallery/construction2.jpg', subHtml: '<h4>Construction: Insulation</h4><p>Spray foam insulation provides excellent thermal properties.</p>' },
                // { src: 'Gallery/construction3.jpg', thumb: 'Gallery/construction3.jpg', subHtml: '<h4>Construction: Wiring</h4><p>Electrical wiring is run throughout the boat.</p>' },
                // { src: 'Gallery/construction4.jpg', thumb: 'Gallery/construction4.jpg', subHtml: '<h4>Construction: Cladding</h4><p>Beautiful wood cladding is installed.</p>' },
                // { src: 'Gallery/construction5.jpg', thumb: 'Gallery/construction5.jpg', subHtml: '<h4>Construction: Kitchen</h4><p>Custom cabinetry and kitchen units are built and fitted.</p>' },
                { src: 'Gallery/progression1.PNG', thumb: 'Gallery/progression1.PNG', subHtml: '<h4>How it started</h4><p>Looked ok but there was no insulation.</p>' },
                { src: 'Gallery/progression2.jpg', thumb: 'Gallery/progression2.jpg', subHtml: '<h4>Demolition</h4><p>Removing old walls, floor, everything basically.</p>' },
                { src: 'Gallery/progression3.jpg', thumb: 'Gallery/progression3.jpg', subHtml: '<h4>Sanding and Cleaning</h4><p>So much rust was sanded off.</p>' },
                { src: 'Gallery/progression4.jpg', thumb: 'Gallery/progression4.jpg', subHtml: '<h4>Spray Foam</h4><p>Professional spray foam insulation was installed.</p>' },
                { src: 'Gallery/progression5.jpg', thumb: 'Gallery/progression5.jpg', subHtml: '<h4>Putting it all back together</h4><p>We moved in and still had a lot to do.</p>' },
                { src: 'Gallery/progression6.jpg', thumb: 'Gallery/progression6.jpg', subHtml: '<h4>All done!</h4><p>Took 2 years, but we finally finished.</p>' },
                { src: 'Gallery/before1.PNG', thumb: 'Gallery/before1.PNG', subHtml: '<h4>Before: Living Room</h4>' },
                { src: 'Gallery/after1.jpg', thumb: 'Gallery/after1.jpg', subHtml: '<h4>After: Living Room' }, 
                { src: 'Gallery/before2.PNG', thumb: 'Gallery/before2.PNG', subHtml: '<h4>Before: Bathroom' },
                { src: 'Gallery/after2.jpg', thumb: 'Gallery/after2.jpg', subHtml: '<h4>After: Bathroom' },
                { src: 'Gallery/before3.PNG', thumb: 'Gallery/before3.PNG', subHtml: '<h4>Before: Bedroom' },
                { src: 'Gallery/after3.jpg', thumb: 'Gallery/after3.jpg', subHtml: '<h4>After: Bedroom' }
            ],
            plugins: [lgZoom, lgThumbnail, lgFullscreen],
        });
        
        renovationGallery.openGallery();
    }

    // Initialize Window View Carousel
    const windowContainer = document.getElementById('window-gallery-container');
    if (windowContainer) {
        const windowGallery = lightGallery(windowContainer, {
            container: windowContainer,
            dynamic: true,
            hash: false,
            closable: false,
            showMaximizeIcon: true,
            appendSubHtmlTo: '.lg-item',
            slideDelay: 400,
            dynamicEl: [
                { src: 'Gallery/window/1.jpg', thumb: 'Gallery/window/1.jpg' },
                { src: 'Gallery/window/2.jpg', thumb: 'Gallery/window/2.jpg' },
                { src: 'Gallery/window/3.jpg', thumb: 'Gallery/window/3.jpg' },
                { src: 'Gallery/window/4.jpg', thumb: 'Gallery/window/4.jpg' },
                { src: 'Gallery/window/5.jpg', thumb: 'Gallery/window/5.jpg' },
                { src: 'Gallery/window/6.jpg', thumb: 'Gallery/window/6.jpg' },
                { src: 'Gallery/window/7.jpg', thumb: 'Gallery/window/7.jpg' },
                { src: 'Gallery/window/8.jpg', thumb: 'Gallery/window/8.jpg' },
                { src: 'Gallery/window/9.jpg', thumb: 'Gallery/window/9.jpg' },
                { src: 'Gallery/window/10.jpg', thumb: 'Gallery/window/10.jpg' },
                { src: 'Gallery/window/11.jpg', thumb: 'Gallery/window/11.jpg' },
                { src: 'Gallery/window/12.jpg', thumb: 'Gallery/window/12.jpg' },
                { src: 'Gallery/window/13.jpg', thumb: 'Gallery/window/13.jpg' },
                { src: 'Gallery/window/14.jpg', thumb: 'Gallery/window/14.jpg' },
                { src: 'Gallery/window/15.jpg', thumb: 'Gallery/window/15.jpg' },
                { src: 'Gallery/window/16.jpg', thumb: 'Gallery/window/16.jpg' },
                { src: 'Gallery/window/17.jpg', thumb: 'Gallery/window/17.jpg' },
                { src: 'Gallery/window/18.jpg', thumb: 'Gallery/window/18.jpg' },
                { src: 'Gallery/window/19.jpg', thumb: 'Gallery/window/19.jpg' },
                { src: 'Gallery/window/20.jpg', thumb: 'Gallery/window/20.jpg' },
                { src: 'Gallery/window/21.jpg', thumb: 'Gallery/window/21.jpg' },
                { src: 'Gallery/window/22.jpg', thumb: 'Gallery/window/22.jpg' },
                { src: 'Gallery/window/23.jpg', thumb: 'Gallery/window/23.jpg' },
                { src: 'Gallery/window/24.jpg', thumb: 'Gallery/window/24.jpg' }
            ],
            plugins: [lgZoom, lgThumbnail, lgFullscreen],
        });
        
        windowGallery.openGallery();
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

 