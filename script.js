// Select the toggle button element
const toggle = document.querySelector('.toggle');

// Add click event listener to the toggle button
// This will toggle the 'active' class on the nav links
toggle.addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});