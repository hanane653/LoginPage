document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Validate inputs (you can add more complex validation logic here)
    if (username.trim() === "" || password.trim() === "") {
      alert("Username and password are required.");
      return;
    }
  
    // Simulate server-side password hashing (you should use a secure hashing algorithm in a real implementation)
    var hashedPassword = hashPassword(password);
  
    // Send login request to the server (you would typically use AJAX to send the data to the server)
    // Here, we'll just display the username and hashed password
    alert("Username: " + username + "\nHashed Password: " + hashedPassword);
  });
  
  function hashPassword(password) {
    // Simulated password hashing (replace with a secure hashing algorithm like bcrypt in a real implementation)
    return "hashed:" + password;
  }