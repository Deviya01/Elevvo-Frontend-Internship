// Sidebar toggle
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');
const mainContent = document.querySelector('.main-content');

menuBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
  mainContent.classList.add('shifted');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
  mainContent.classList.remove('shifted');
});
// Bonus: fade-in when sidebar first enters viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(sidebar);
