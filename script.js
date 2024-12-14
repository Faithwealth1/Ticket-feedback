// Dropdown Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');

  dropdownButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          event.stopPropagation(); // Prevents body click from closing immediately
          closeAllDropdowns(); // Close other open dropdowns
          const menu = button.nextElementSibling;
          menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
      });
  });

  // Close dropdown if clicked outside
  document.body.addEventListener('click', () => {
      closeAllDropdowns();
  });

  function closeAllDropdowns() {
      const menus = document.querySelectorAll('.dropdown-menu');
      menus.forEach(menu => menu.style.display = 'none');
  }
});
