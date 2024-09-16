// Listen for clicks on the anchor tag
document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Example criteria (You can replace these with your own logic)
    if (email === 'sarahlesley253@gmail.com' && password === 'Jonny11$$!!') {

        emailInput.style.border = '';
        passwordInput.style.border = '';

        // Set a delay of 3 seconds before redirecting
        setTimeout(function() {
            window.location.href = 'dashboard.html'; // Redirect to the dashboard
        }, 3000); // 3000 milliseconds = 3 seconds
      } else {
        // Add a red border to the invalid fields
        emailInput.style.border = '1px solid #EE4B2B';
        passwordInput.style.border = '1px solid #EE4B2B';
    }
});


