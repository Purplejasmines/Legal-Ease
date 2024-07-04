// document.addEventListener('DOMContentLoaded', function() {
//      const dropdownIcon = document.getElementById('dropdown-icon');
//     const dropdownMenu = document.getElementById('dropdown-menu');



// dropdownIcon.addEventListener('click', function() {
//     dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
// });

// })





// Get the dropdown toggle buttons and icons
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
const dropdownIcons = document.querySelectorAll('.dropdown-icon');

// Get the dropdown menus
const dropdownMenus = document.querySelectorAll('.dropdown-menu');

// Add event listeners to the toggle buttons and icons
dropdownToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', () => {
    toggleDropdownMenu(index);
  });
});

dropdownIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    toggleDropdownMenu(index);
  });
});

// Function to toggle the dropdown menu
function toggleDropdownMenu(index) {
  const dropdownMenu = dropdownMenus[index];
  dropdownMenu.classList.toggle('show');
}