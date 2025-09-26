document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("messageField").value.trim();

  // Validation
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields are required!");
    return;
  }

  // Email validation regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Phone validation (digits only)
  let phonePattern = /^[0-9]{10,13}$/;
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid phone number (10-13 digits).");
    return;
  }

  // Display output
  document.getElementById("formOutput").innerHTML = `
    <p><strong>Current time:</strong> ${new Date()}</p>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
});
