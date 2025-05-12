document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill in all fields.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Enter a valid email address.");
                return;
            }

            alert("Your message has been sent!");
            contactForm.reset();
        });
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});

// Scroll to Section Function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
