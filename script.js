// Select the toggle button element
const toggle = document.querySelector('.toggle');

// Check if toggle button and nav links exist before adding event listener
if (toggle) {
    // Add click event listener to the toggle button
    // This will toggle the 'active' class on the nav links
    toggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.classList.toggle('active');
        } else {
            console.error('Nav links element not found.');
        }
    });
} else {
    console.error('Toggle button element not found.');
}