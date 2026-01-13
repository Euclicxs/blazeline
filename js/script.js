// BlazeLine Fire Department JavaScript

// Mobile Navigation Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        if (nav) {
            nav.classList.toggle('active');
        }
        mobileMenuToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
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
        if (nav) {
            nav.classList.remove('active');
        }
        if (mobileMenuToggle) {
            mobileMenuToggle.classList.remove('active');
        }
    });
});

// Header background on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, var(--fire-truck-red) 0%, var(--ember-orange) 100%)';
        header.style.boxShadow = '0 4px 20px rgba(196, 30, 58, 0.3)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--fire-truck-red) 0%, var(--ember-orange) 100%)';
        header.style.boxShadow = '0 2px 10px rgba(196, 30, 58, 0.2)';
    }
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav .nav-link[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Update header background based on scroll
function updateHeaderBackground() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, var(--fire-truck-red) 0%, var(--ember-orange) 100%)';
        header.style.boxShadow = '0 4px 20px rgba(196, 30, 58, 0.3)';
    } else {
        header.style.background = 'linear-gradient(135deg, var(--fire-truck-red) 0%, var(--ember-orange) 100%)';
        header.style.boxShadow = '0 2px 10px rgba(196, 30, 58, 0.2)';
    }
}

// Crew modal functionality
function showCrewModal(crewMember) {
    const modal = document.createElement('div');
    modal.className = 'crew-modal';
    
    const crewData = {
        'sarah-johnson': {
            name: 'Chief Sarah Johnson',
            title: 'Fire Chief',
            experience: '15 years of service',
            specialty: 'Emergency Management & Leadership',
            bio: 'Chief Johnson has been serving the community for over 15 years. She started as a volunteer firefighter and worked her way up through the ranks. Her expertise in emergency management and leadership has been instrumental in modernizing our department.',
            photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
            achievements: [
                'Modernized department operations and safety protocols',
                'Implemented citywide emergency response optimization',
                'Mentored 50+ firefighters and EMTs',
                'Medal of Valor recipient (2019)'
            ]
        },
        'mike-rodriguez': {
            name: 'Captain Mike Rodriguez',
            title: 'Operations Captain',
            experience: '12 years of service',
            specialty: 'Technical Rescue & Fire Suppression',
            bio: 'Captain Rodriguez brings 12 years of experience to our team. He specializes in technical rescue operations and advanced fire suppression techniques. Mike is also our training officer, ensuring all personnel maintain the highest standards.',
            photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
            achievements: [
                'Led 100+ technical rescues without injury',
                'Designed advanced suppression training curriculum',
                'High-angle rescue state certification',
                'Unit commendation for wildfire containment'
            ]
        },
        'emily-chen': {
            name: 'Lieutenant Emily Chen',
            title: 'Training Officer',
            experience: '8 years of service',
            specialty: 'Emergency Medical Services & Training',
            bio: 'Lieutenant Chen leads our EMS division with 8 years of dedicated service. She is a certified paramedic and instructor, responsible for all medical training and protocols. Emily has revolutionized our emergency medical response capabilities.',
            photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
            achievements: [
                'Developed EMS training adopted citywide',
                'Paramedic of the Year (2023)',
                'Certified ACLS/PALS instructor',
                'Improved EMS response times by 15%'
            ]
        },
        'david-thompson': {
            name: 'Paramedic David Thompson',
            title: 'EMS Coordinator',
            experience: '10 years of service',
            specialty: 'Advanced Life Support & Community Outreach',
            bio: 'David Thompson serves as our Senior Paramedic with a decade of experience in emergency medical services. He specializes in advanced life support and is passionate about community outreach programs, teaching CPR and first aid to local residents.',
            photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
            achievements: [
                'Delivered 500+ ALS interventions',
                'Led community CPR training for 2,000+ residents',
                'Implemented EMS QA/QI improvements',
                'Deployed on regional disaster relief operations'
            ]
        }
    };

    const person = crewData[crewMember];
    if (!person) return;

    const achievementsHtml = person.achievements && person.achievements.length
        ? `<div class="crew-achievements">
                <h4>Achievements</h4>
                <ul>${person.achievements.map(item => `<li>${item}</li>`).join('')}</ul>
           </div>`
        : '';

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div class="crew-detail">
                <img src="${person.photo}" alt="${person.name}" class="crew-photo">
                <h3>${person.name}</h3>
                <h4>${person.title}</h4>
                <div class="crew-info">
                    <p><strong>Experience:</strong> ${person.experience}</p>
                    <p><strong>Specialty:</strong> ${person.specialty}</p>
                </div>
                <p class="crew-bio">${person.bio}</p>
                ${achievementsHtml}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .crew-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            background: linear-gradient(135deg, var(--signal-white) 0%, var(--gray-100) 100%);
            border: 2px solid var(--golden-yellow);
            border-radius: 15px;
            padding: 2rem;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 40px rgba(255, 107, 53, 0.3);
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 2rem;
            cursor: pointer;
            color: var(--gray-400);
            transition: color 0.3s ease;
        }
        
        .close-modal:hover {
            color: var(--ember-orange);
        }
        
        .crew-detail {
            text-align: center;
        }
        
        .crew-photo {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--ember-orange);
            margin-bottom: 1rem;
            box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
        }
        
        .crew-detail h3 {
            color: var(--gray-900);
            font-size: 1.8rem;
            margin-bottom: 0.5rem;
        }
        
        .crew-detail h4 {
            color: var(--fire-truck-red);
            font-size: 1.2rem;
            margin-bottom: 1rem;
            font-weight: 600;
        }
        
        .crew-info {
            background: rgba(255, 160, 0, 0.08);
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border-left: 4px solid var(--ember-orange);
        }
        
        .crew-info p {
            color: var(--gray-800);
            margin-bottom: 0.5rem;
            text-align: left;
        }
        
        .crew-bio {
            color: var(--gray-800);
            line-height: 1.6;
            text-align: left;
            font-size: 1rem;
        }
        
        .crew-achievements {
            margin-top: 1rem;
            text-align: left;
        }
        
        .crew-achievements h4 {
            color: var(--fire-truck-red);
            margin-bottom: 0.5rem;
        }
        
        .crew-achievements ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .crew-achievements li {
            position: relative;
            padding-left: 1.25rem;
            margin-bottom: 0.4rem;
            color: var(--gray-800);
        }
        
        .crew-achievements li::before {
            content: '🔥';
            position: absolute;
            left: 0;
        }
        
        @media (max-width: 768px) {
            .modal-content {
                padding: 1.5rem;
                margin: 1rem;
            }
            
            .crew-photo {
                width: 150px;
                height: 150px;
            }
        }
    `;
    
    document.head.appendChild(modalStyle);

    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(modalStyle);
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(modalStyle);
        }
    });
}

// Contact form modal
function showContactForm() {
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div class="contact-modal-content">
            <span class="close-modal">&times;</span>
            <h3>Contact BlazeLine Fire Department</h3>
            <form id="contact-form">
                <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                </div>
                <div class="form-group">
                    <label for="emergency">
                        <input type="checkbox" id="emergency" name="emergency">
                        This is an emergency (Call 911 instead)
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .contact-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        }
        
        .contact-modal-content {
            background: linear-gradient(135deg, var(--signal-white) 0%, var(--gray-100) 100%);
            border: 2px solid var(--golden-yellow);
            border-radius: 15px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 40px rgba(255, 107, 53, 0.3);
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 2rem;
            cursor: pointer;
            color: var(--gray-400);
            transition: color 0.3s ease;
        }
        
        .close-modal:hover {
            color: var(--ember-orange);
        }
        
        #contact-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .form-group {
            display: flex;
            flex-direction: column;
        }
        
        .form-group label {
            color: var(--gray-800);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            padding: 0.75rem;
            border: 2px solid var(--gray-400);
            border-radius: 8px;
            background: var(--signal-white);
            color: var(--gray-900);
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--ember-orange);
            box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
        }
        
        .form-group input[type="checkbox"] {
            width: auto;
            margin-right: 0.5rem;
        }
        
        .form-group label[for="emergency"] {
            display: flex;
            align-items: center;
            color: var(--fire-truck-red);
            font-weight: 600;
        }
        
        button[type="submit"] {
            margin-top: 1rem;
            padding: 1rem;
            font-size: 1.1rem;
            font-weight: 600;
            background: linear-gradient(135deg, var(--ember-orange) 0%, var(--fire-truck-red) 100%);
            border: none;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        button[type="submit"]:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
        }
        
        @media (max-width: 768px) {
            .contact-modal-content {
                padding: 1.5rem;
                margin: 1rem;
            }
        }
    `;
    
    document.head.appendChild(modalStyle);
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', () => {
        document.body.removeChild(modal);
        document.head.removeChild(modalStyle);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(modalStyle);
        }
    });
    
    // Form submission
    modal.querySelector('#contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const isEmergency = formData.get('emergency');
        
        if (isEmergency) {
            alert('🚨 For emergencies, please call 911 immediately! 🚨');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! We will respond within 24 hours.');
        console.log('Contact form submitted:', Object.fromEntries(formData));
        
        // Close modal
        document.body.removeChild(modal);
        document.head.removeChild(modalStyle);
    });
}

// Join BlazeLine Modal Function
function showJoinBlazeLineForm() {
    const modal = document.createElement('div');
    modal.className = 'join-modal';
    modal.innerHTML = `
        <div class="join-modal-content">
            <span class="close-modal">&times;</span>
            <h3>Join BlazeLine Fire Department</h3>
            <p>Ready to serve your community? Fill out the form below to start your journey with our dedicated team.</p>
            <form id="join-form">
                <div class="form-group">
                    <label for="firstName">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required>
                </div>
                <div class="form-group">
                    <label for="middleInitial">Middle Initial (Optional)</label>
                    <input type="text" id="middleInitial" name="middleInitial" maxlength="1" placeholder="M">
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required>
                </div>
                <div class="form-group">
                    <label for="email">Email *</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <button type="submit" class="btn btn-primary">Join Our Team</button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .join-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(5px);
        }
        
        .join-modal-content {
            background: linear-gradient(135deg, var(--signal-white) 0%, var(--gray-100) 100%);
            border: 2px solid var(--golden-yellow);
            border-radius: 15px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            box-shadow: 0 20px 40px rgba(255, 107, 53, 0.3);
        }
        
        .join-modal-content h3 {
            color: var(--gray-900);
            margin-bottom: 1rem;
            text-align: center;
            font-size: 1.5rem;
        }
        
        .join-modal-content p {
            color: var(--gray-700);
            text-align: center;
            margin-bottom: 1.5rem;
        }
        
        .close-modal {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 2rem;
            cursor: pointer;
            color: var(--gray-400);
            transition: color 0.3s ease;
        }
        
        .close-modal:hover {
            color: var(--ember-orange);
        }
        
        #join-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        #join-form .form-group {
            display: flex;
            flex-direction: column;
        }
        
        #join-form label {
            color: var(--gray-800);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        
        #join-form input {
            padding: 0.75rem;
            border: 2px solid var(--gray-400);
            border-radius: 8px;
            background: var(--signal-white);
            color: var(--gray-900);
            font-size: 1rem;
            transition: border-color 0.3s ease;
        }
        
        #join-form input:focus {
            outline: none;
            border-color: var(--ember-orange);
            box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
        }
        
        #join-form input::placeholder {
            color: var(--gray-500);
        }
        
        #join-form button {
            margin-top: 1rem;
            padding: 1rem;
            font-size: 1.1rem;
            font-weight: 600;
            background: linear-gradient(135deg, var(--ember-orange) 0%, var(--fire-truck-red) 100%);
            border: none;
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        #join-form button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(255, 107, 53, 0.3);
        }
        
        @media (max-width: 768px) {
            .join-modal-content {
                padding: 1.5rem;
                margin: 1rem;
            }
        }
    `;
    
    document.head.appendChild(modalStyle);
    
    // Close modal functionality
    modal.querySelector('.close-modal').addEventListener('click', function() {
        document.body.removeChild(modal);
        document.head.removeChild(modalStyle);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            document.body.removeChild(modal);
            document.head.removeChild(modalStyle);
        }
    });
    
    // Form submission
    modal.querySelector('#join-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const email = formData.get('email');
        const middleInitial = formData.get('middleInitial');
        
        // Show thank you message
        modal.querySelector('.join-modal-content').innerHTML = `
            <span class="close-modal">&times;</span>
            <div style="text-align: center; padding: 2rem 0;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🚒</div>
                <h3 style="color: var(--gray-900); margin-bottom: 1rem;">Welcome to BlazeLine!</h3>
                <p style="color: var(--gray-700); margin-bottom: 1.5rem;">
                    Thank you for your interest in joining our team, <strong>${firstName}${middleInitial ? ' ' + middleInitial + '.' : ''} ${lastName}</strong>!
                </p>
                <p style="color: var(--gray-700); margin-bottom: 2rem;">
                    We've received your application and will contact you at <strong>${email}</strong> within 24-48 hours with next steps.
                </p>
                <p style="color: var(--ember-orange); font-weight: 600;">
                    Together, we keep our community safe! 🔥
                </p>
                <button class="btn btn-primary" onclick="document.body.removeChild(document.querySelector('.join-modal')); document.head.removeChild(document.querySelector('style:last-child'));" style="margin-top: 1.5rem;">
                    Close
                </button>
            </div>
        `;
        
        // Re-add close functionality
        modal.querySelector('.close-modal').addEventListener('click', function() {
            document.body.removeChild(modal);
            document.head.removeChild(modalStyle);
        });
        
        console.log('Join BlazeLine form submitted:', Object.fromEntries(formData));
    });
}

// Initialize page
updateActiveNavLink();
updateHeaderBackground();

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Lazy loading for images (when images are added)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when images are present
document.addEventListener('DOMContentLoaded', () => {
    lazyLoadImages();
});

// Event listeners for crew cards
document.addEventListener('DOMContentLoaded', () => {
    const crewCards = document.querySelectorAll('.crew-member');
    crewCards.forEach(card => {
        card.addEventListener('click', () => {
            const crewMember = card.getAttribute('data-crew');
            showCrewModal(crewMember);
        });
    });
});

// Event listeners for contact form
document.addEventListener('DOMContentLoaded', () => {
    const contactLink = document.querySelector('a[href="#contact"]');
    if (contactLink) {
        contactLink.addEventListener('click', (e) => {
            e.preventDefault();
            showContactForm();
        });
    }
});

// Event listeners for footer contact links
document.addEventListener('DOMContentLoaded', () => {
    const footerContactLinks = document.querySelectorAll('.footer-links a[href="#contact"]');
    footerContactLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            showContactForm();
        });
    });
});

// Event listeners for Join BlazeLine button
document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.querySelector('a[href="#contact"].btn.btn-primary');
    if (joinButton && joinButton.textContent.includes('Join BlazeLine')) {
        joinButton.addEventListener('click', (e) => {
            e.preventDefault();
            showJoinBlazeLineForm();
        });
    }
});

// Scroll event listeners
window.addEventListener('scroll', updateActiveNavLink);
window.addEventListener('scroll', updateHeaderBackground);
