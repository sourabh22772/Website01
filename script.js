// WhatsApp and Call Functionality
document.querySelector('.social-links a[href^="https://wa.me"]').addEventListener('click', function() {
    alert('WhatsApp us for more details!');
});

document.querySelector('.social-links a[href^="tel:"]').addEventListener('click', function() {
    alert('Call us for more details!');
});