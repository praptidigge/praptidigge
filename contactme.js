document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been sent successfully!");
    // Reset form fields after submission
    document.getElementById("contactForm").reset();
});
