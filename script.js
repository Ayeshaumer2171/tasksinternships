function login(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform your authentication logic here
    // For simplicity, let's assume the login is successful
    alert("Login successful!");
  }
  
  function register(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username, password, and confirm password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
  
    // Perform your registration logic here
    // For simplicity, let's assume the registration is successful
    alert("Registration successful!");
  }
  