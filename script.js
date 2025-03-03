let isDarkMode = localStorage.getItem('darkMode') === 'true';

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode);
}

if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

// Apply dark mode to sidebar and dropdowns
const sidebarLinks = document.querySelectorAll('.sidebar ul li a');
const dropdownLinks = document.querySelectorAll('.dropdown-content a');

if (isDarkMode) {
    sidebarLinks.forEach(link => {
        link.style.color = '#ffffff'; // Light text color for sidebar links
    });
    dropdownLinks.forEach(link => {
        link.style.color = '#ffffff'; // Light text color for dropdown links
    });
}

function showAlert() {
    alert("This is a dummy tutorial. More content will be added soon!");
}
