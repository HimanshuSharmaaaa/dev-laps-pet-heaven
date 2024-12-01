// Add this script to a new file named "script.js" or include it in the HTML file within a <script> tag.

document.addEventListener("DOMContentLoaded", () => {
  // Handle Adopt Me button clicks
  const adoptButtons = document.querySelectorAll(".pet-card button");

  adoptButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const petName =
        event.target.parentElement.querySelector("h3").textContent;
      alert(
        `Thank you for your interest in adopting ${petName}! We will contact you shortly.`
      );
    });
  });

  // Handle form submission
  const contactForm = document.querySelector("form");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (name && email && message) {
      alert(
        `Thank you, ${name}! Your message has been received. We will get back to you soon.`
      );
      contactForm.reset(); // Reset the form
    } else {
      alert("Please fill in all the required fields.");
    }
  });
});
