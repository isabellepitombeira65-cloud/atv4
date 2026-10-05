const themeToggleBtn = document.getElementById('toggle-theme');

themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    themeToggleBtn.textContent = 'Modo Claro';
  } else {
    themeToggleBtn.textContent = 'Modo Escuro';
  }
});