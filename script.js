// Handle Login Form
const loginForm = document.querySelector('form[action="profile.html"]');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Logged in successfully!');
        // Redirect manually if needed
        window.location.href = 'profile.html';
    });
}

// Handle Edit Profile Form
const editProfileForm = document.querySelectorAll('form[action="profile.html"]')[1];
if (editProfileForm) {
    editProfileForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Profile saved successfully!');
        // Redirect manually if needed
        window.location.href = 'profile.html';
    });
}

// Handle Back Button on Influencer Detail Page
const backButton = document.querySelector('.back-btn');
if (backButton) {
    backButton.addEventListener('click', function () {
        window.history.back();
    });
}

// Booking form handling
const bookingForm = document.getElementById('booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault(); // prevent page reload

        // Show fake success message
        alert('Booking submitted successfully!');

        // Optional: clear form fields after submission
        bookingForm.reset();
    });
}

