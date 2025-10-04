// Light/Dark theme toggle
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = themeBtn.querySelector('i');
  if (document.body.classList.contains('dark')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});
// Bonus: Scroll fade animation
const fadeSections = document.querySelectorAll('.fade-section');
const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(sec => appearOnScroll.observe(sec));
