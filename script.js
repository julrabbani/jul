const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', (event) => {
    // Toggle the light-mode class on the body
    document.body.classList.toggle('light-mode');
});
