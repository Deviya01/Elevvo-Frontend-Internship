// Simple scroll-reveal for .fade elements
(function(){
  const items = document.querySelectorAll('.fade');

  const reveal = () => {
    const trigger = window.innerHeight * 0.85;
    items.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if(top < trigger) el.classList.add('show');
    });
  };

  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);
  // initial check
  document.addEventListener('DOMContentLoaded', reveal);
})();
