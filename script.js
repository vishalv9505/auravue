// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Add smooth scrolling to all links
    const links = document.querySelectorAll("a[href^='#']");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Handle form submission
    const form = document.querySelector("#contact form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Capture form data (simple example)
            const formData = new FormData(form);
            const name = formData.get("name");
            const email = formData.get("email");
            const message = formData.get("message");

            // Placeholder for actual submission logic
            alert(`Thank you, ${name}! Your message has been sent.`);

            // Reset form after submission
            form.reset();
        });
    }
});
