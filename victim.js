document.getElementById('updateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual submission for demonstration
    const email = document.getElementById('email').value;
    document.getElementById('result').textContent = `Email updated to: ${email}`;

    // Store the updated email in local storage
    localStorage.setItem('email', email);
});

// Check if the email was changed via CSRF
window.onload = function() {
    const updatedEmail = localStorage.getItem('email');
    if (updatedEmail) {
        document.getElementById('result').textContent = `Email updated to: ${updatedEmail}`;
        document.getElementById('csrfAlert').textContent = 'Note: Your email was changed without your consent!';
    }
};
