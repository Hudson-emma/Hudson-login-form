document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  // --- Handle Login Form ---
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const usernameInput = this.querySelector('.input-box input[type="text"]');
      const passwordInput = this.querySelector(
        '.password input[type="password"]'
      ); // Ensure this matches your HTML

      const username = usernameInput ? usernameInput.value.trim() : "";
      const password = passwordInput ? passwordInput.value : "";

      // Client-side validation for Login
      if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
      }

      console.log("Login attempt:");
      console.log("Username:", username);
      console.log("Password:", password);

      // In a real application, you would send this data to a server for authentication.
      /*
            fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Login successful!');
                    // Redirect to dashboard or home page:
                    // window.location.href = '/dashboard';
                } else {
                    alert('Login failed: ' + (data.message || 'Invalid credentials'));
                }
            })
            .catch(error => {
                console.error('Error during login:', error);
                alert('An error occurred during login. Please try again.');
            });
            */

      alert("Login form submitted! Check console for data.");
    });
    console.log("Login form script initialized.");
  } else {
    // This console.log will only show if no loginForm is found on the page, which is expected if it's a register page.
    // console.warn('Login form with ID "loginForm" not found on this page.');
  }

  // --- Handle Registration Form ---
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get all input values (adjust selectors based on your HTML if different)
      const firstnameInput = this.querySelector(
        'input[placeholder="firstname"]'
      );
      const surnameInput = this.querySelector('input[placeholder="surname"]');
      const contactInput = this.querySelector('input[placeholder="contact"]');
      const usernameInput = this.querySelector('input[placeholder="username"]');
      const passwordInput = this.querySelector('input[placeholder="password"]');
      const confirmPasswordInput = this.querySelector(
        'input[placeholder="confirm password"]'
      );

      const firstname = firstnameInput ? firstnameInput.value.trim() : "";
      const surname = surnameInput ? surnameInput.value.trim() : "";
      const contact = contactInput ? contactInput.value.trim() : "";
      const username = usernameInput ? usernameInput.value.trim() : "";
      const password = passwordInput ? passwordInput.value : "";
      const confirmPassword = confirmPasswordInput
        ? confirmPasswordInput.value
        : "";

      // --- Client-side Validation for Registration ---
      if (
        firstname === "" ||
        surname === "" ||
        contact === "" ||
        username === "" ||
        password === "" ||
        confirmPassword === ""
      ) {
        alert("Please fill in all fields.");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const contactRegex = /^\d+$/; // Only allows digits
      if (!contactRegex.test(contact)) {
        alert("Contact number should contain only digits.");
        return;
      }

      console.log("Registration Data:");
      console.log("First Name:", firstname);
      console.log("Surname:", surname);
      console.log("Contact:", contact);
      console.log("Username:", username);
      console.log(
        "Password (for demonstration, never send plain to server):",
        password
      );

      // In a real application, you would send this data to a server for registration.
      /*
            fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ firstname, surname, contact, username, password })
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Registration successful! You can now log in.');
                    // Redirect to login page or a success page:
                    // window.location.href = 'index.html';
                } else {
                    alert('Registration failed: ' + (data.message || 'Username or contact might already be taken.'));
                }
            })
            .catch(error => {
                console.error('Error during registration:', error);
                alert('An error occurred during registration. Please try again later.');
            });
            */

      alert("Registration form submitted! Check the console for data.");
      // this.reset(); // Optionally clear the form fields after successful submission
    });
    console.log("Registration form script initialized.");
  } else {
    // This console.log will only show if no registerForm is found on the page, which is expected if it's a login page.
    // console.warn('Registration form with ID "registerForm" not found on this page.');
  }
});
