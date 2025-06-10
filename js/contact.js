// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const submitBtn = document.querySelector('.submit-btn');

// Form validation
function validateForm(event) {
    event.preventDefault();
    
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const subject = contactForm.subject.value;
    const message = contactForm.message.value.trim();

    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Submit form
    submitForm({
        name,
        email,
        subject,
        message
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm(data) {
    // Here you would typically send the form data to your server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
}

// Add event listener
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}

// Map initialization
function initMap() {
    // Create the map
    const map = L.map('map').setView([22.3193, 114.1694], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add marker for office location
    L.marker([22.3193, 114.1694]).addTo(map)
        .bindPopup('Camenae Asia Office')
        .openPopup();
}

// Initialize map when page loads
window.addEventListener('load', initMap);
