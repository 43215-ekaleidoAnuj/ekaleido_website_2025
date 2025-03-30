  // Initialize EmailJS with your User ID
  (function() {
    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID
  })();

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = event.target;
    const messageElement = document.getElementById('formMessage');
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Send email using EmailJS
    emailjs.sendForm("service_8cyktrv", "template_fsy4hb7", form)
      .then(function(response) {
        messageElement.textContent = 'Thank you! Your message has been sent successfully.';
        messageElement.className = 'form-message success';
        form.reset();
      }, function(error) {
        messageElement.textContent = 'Oops! Something went wrong. Please try again.';
        messageElement.className = 'form-message error';
        console.error('EmailJS Error:', error);
      })
      .finally(function() {
        submitButton.disabled = false;
        submitButton.textContent = 'Connect Now';
        
        // Hide message after 5 seconds
        setTimeout(() => {
          messageElement.style.display = 'none';
        }, 5000);
      });
  });