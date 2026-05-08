// --- Preloader Fade-out ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
    }
});

document.addEventListener('DOMContentLoaded', () => {

    // --- Fetch Dynamic Content ---
    // --- Fetch Dynamic Content ---
    // fetchContent(); // Disabled to use static HTML content

    // --- Sticky Header & Active Link ---
    const header = document.querySelector('.header');

    // --- Stats Counter Animation ---
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // Trigger animation when stats section is in view
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animateCounters();
                observer.disconnect(); // Run once
            }
        });
        observer.observe(statsSection);
    }
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Sticky Header
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Active Link based on Path
    const path = window.location.pathname;
    const page = path.split("/").pop();

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === page || (page === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // --- Mobile Menu Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('toggle'); 
        document.body.classList.toggle('no-scroll'); // Prevent background scrolling
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('toggle');
            document.body.classList.remove('no-scroll');
        });
    });

    // Close logic
    const closeMenu = () => {
        nav.classList.remove('active');
        hamburger.classList.remove('toggle');
        document.body.classList.remove('no-scroll');
    };

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('active') && !nav.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });

    // --- Intersection Observer for Animations ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

                // Trigger counters if it's the specific section
                if (entry.target.classList.contains('about-stats')) {
                    startCounters();
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.fade-up, .fade-left, .fade-right, .industries-scroll-section');
    hiddenElements.forEach(el => observer.observe(el));

    // --- Number Counter Animation ---
    let counted = false;
    function startCounters() {
        if (counted) return;
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // The lower the slower

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
        counted = true;
    }





    // --- Form Handling (Real API) ---
    const manpowerForm = document.getElementById('manpowerRequestForm');
    if (manpowerForm) {
        manpowerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = manpowerForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;
            submitBtn.innerText = 'Sending Request...';
            submitBtn.disabled = true;

            // Collect Data
            const formData = {
                companyName: document.getElementById('companyName').value,
                uen: document.getElementById('uen').value,
                contactPerson: document.getElementById('contactPerson').value,
                designation: document.getElementById('designation').value,
                email: document.getElementById('email').value,
                mobile: document.getElementById('mobile').value,
                projectType: document.getElementById('projectType').value,
                preference: document.getElementById('preference').value,
                headcount: document.getElementById('headcount').value,
                duration: document.getElementById('duration').value,
                referral: document.getElementById('referral').value,
                requirements: document.getElementById('requirements').value
            };

            try {
                const response = await fetch('/api/request-manpower', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                const result = await response.json();

                if (result.success) {
                    alert('Success! Your manpower request has been submitted. Check your email for confirmation.');
                    manpowerForm.reset();
                } else {
                    alert('Error: ' + result.message);
                }
            } catch (error) {
                console.error('Request failed:', error);
                alert('An error occurred while sending your request. Please try again.');
            } finally {
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }
        });
    }








    // --- Rolling Stack Animation (Optimized - Center Trigger) ---
    const stackCards = document.querySelectorAll('.stack-card');
    if (stackCards.length > 0) {
        let ticking = false;
        
        function updateCardScales() {
            const windowHeight = window.innerHeight;
            const viewportCenter = windowHeight / 2; // Center of viewport
            
            stackCards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardTop = rect.top;
                const cardCenter = cardTop + (rect.height / 2);
                
                // Distance from card center to viewport center
                const distanceFromCenter = Math.abs(cardCenter - viewportCenter);
                
                // Maximum distance for scaling effect (tune this value)
                const maxDistance = windowHeight * 0.5;
                
                let scale = 1;
                let opacity = 1;
                
                // Calculate scale based on distance from center
                // Scale is 1.0 at center, reduces as it moves away
                if (distanceFromCenter < maxDistance) {
                    const progress = distanceFromCenter / maxDistance;
                    scale = 1 - (progress * 0.15); // Scale from 1.0 to 0.85
                    opacity = 1 - (progress * 0.3); // Fade from 1.0 to 0.7
                } else {
                    scale = 0.85;
                    opacity = 0.7;
                }
                
                // Apply transform
                card.style.transform = `scale(${scale})`;
                card.style.opacity = opacity;
            });
            
            ticking = false;
        }
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateCardScales);
                ticking = true;
            }
        });
        
        // Initial call
        updateCardScales();
    }

    });

const defaultContent = {
    "hero": {
        "headline": "Empowering Businesses with <br><span class=\"text-gradient\">Elite Workforce Solutions</span>",
        "subheadline": "Singapore's trusted partner for skilled manpower, logistics, and cleaning staff. Fully MOM-compliant and ready to deploy."
    },
    "about": {
        "title": "Driving Efficiency Through People",
        "description": "At RNS Technology, we believe that the right people drive business success. Established in Singapore, we specialize in providing high-quality, reliable, and compliant manpower solutions across various industries.",
        "sub_description": "We adhere strictly to Ministry of Manpower (MOM) regulations, ensuring peace of mind for our clients and fair treatment for our staff.",
        "stats": [
            { "label": "Staff Deployed", "value": 500 },
            { "label": "Corporate Clients", "value": 50 },
            { "label": "Industry Experience (Years)", "value": 10 },
            { "label": "Support System", "value": "24/7" }
        ]
    },
    "services": [
        { "title": "General Manpower", "desc": "Reliable general workers for production, events, and ad-hoc projects.", "icon": "fa-users" },
        { "title": "Skilled Labour", "desc": "Certified technicians, electricians, and tradesmen for specialized tasks.", "icon": "fa-helmet-safety" },
        { "title": "Cleaning Crew", "desc": "Professional cleaning staff for commercial, industrial, and office spaces.", "icon": "fa-broom" },
        { "title": "Logistics Staff", "desc": "Drivers, packers, and warehouse assistants to streamline your supply chain.", "icon": "fa-truck-moving" },
        { "title": "Admin & Office", "desc": "Temporary and permanent administrative support and receptionists.", "icon": "fa-laptop-file" },
        { "title": "Security Workforce", "desc": "Trained and licensed security personnel for premises protection.", "icon": "fa-user-shield" }
    ],
    "contact": {
        "phone": "+65 6123 4567",
        email: "ikrisshna08@gmail.com",
        "address": "123 Robinson Road, #10-01, Singapore 068913"
    }
};

async function fetchContent() {
    try {
        // LocalStorage Fallback
        let data = JSON.parse(localStorage.getItem('siteContent'));
        if (!data) {
            data = defaultContent;
            localStorage.setItem('siteContent', JSON.stringify(data));
        }

        // Hero
        document.getElementById('hero-headline').innerHTML = data.hero.headline;
        document.getElementById('hero-subheadline').textContent = data.hero.subheadline;

        // About
        document.getElementById('about-title').textContent = data.about.title;
        // Check if elements exist before setting textContent to avoid errors if ID is missing in older HTML
        if (document.getElementById('about-description')) document.getElementById('about-description').textContent = data.about.description;
        if (document.getElementById('about-sub-description')) document.getElementById('about-sub-description').textContent = data.about.sub_description;



        // Contact
        document.getElementById('contact-phone').textContent = data.contact.phone;
        document.getElementById('contact-email').textContent = data.contact.email;
        document.getElementById('contact-address').textContent = data.contact.address;



    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Hero Tabs Logic
document.addEventListener('DOMContentLoaded', () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabBtns.length > 0) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));

                // Add active class to clicked button and target content
                btn.classList.add('active');
                const targetId = btn.getAttribute('data-target');
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
});
