document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // You can add additional validation or AJAX calls here if needed

    // For now, just display a message
    document.getElementById('message').innerText = `Logging in as ${username}...`;
    
    // Optionally, you can submit the form programmatically if needed
    this.submit();
});
