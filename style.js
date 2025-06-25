document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-message").textContent = "Thank you! I’ll get back to you soon.";
  this.reset();
});
