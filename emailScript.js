function submitForm() {
  document.getElementById("submitBtn").disabled = true;
  // Get form data
  var formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  // Send email using EmailJS
  emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formData).then(
    function (response) {
      console.log("Email sent!", response.status, response.text);
      // Reset the form
      document.getElementById("contactForm").reset();
      document.getElementById("submitBtn").disabled = false;
      document.getElementById("responseSuccessMessage").innerHTML =
        "Thank you for contacting us! We'll get back to you soon!";
      document.getElementById("responseErrorMessage").innerHTML = "";
    },
    function (error) {
      console.error("Email failed to send!", error);
      document.getElementById("responseSuccessMessage").innerHTML = "";
      document.getElementById("responseErrorMessage").innerHTML =
        "Sorry, Unable to send your respone. Please try again.";
    }
  );
}

// Helper function to validate email using regular expression
function isValidEmail(email) {
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form input elements
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    // Validate name
    if (nameInput.value.trim() === "") {
      alert("Please enter your name.");
      nameInput.focus();
      return false;
    }

    // Validate email
    if (emailInput.value.trim() === "") {
      alert("Please enter your email address.");
      emailInput.focus();
      return false;
    } else if (!isValidEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return false;
    }

    // Validate message
    if (messageInput.value.trim() === "") {
      alert("Please enter a message.");
      messageInput.focus();
      return false;
    }

    // Form is valid, submit the form or perform further actions
    submitForm();
  });
