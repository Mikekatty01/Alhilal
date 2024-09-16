document.getElementById('hiLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of the link

    const phone = document.getElementById('phone').value;

    // Example condition: Check if the phone number is 9 digits long
    if (phone.length === 9 && !isNaN(phone)) {
        window.location.href = 'confirm.html'; // Redirect to confirm.html
    } else {
        alert('Invalid Phone Number');
    }
});
