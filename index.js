// Function to scroll to a specific section when button is clicked
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission (simple alert for now)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you shortly.");
});
