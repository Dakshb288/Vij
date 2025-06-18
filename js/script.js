document.addEventListener("DOMContentLoaded", () => {
  // PRICING TOGGLE
  const toggleButtons = document.querySelectorAll(".toggle-btn");
  const pricingCards = document.querySelectorAll(".pricing-card");

  toggleButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const selectedPlan = btn.getAttribute("data-plan");
      pricingCards.forEach((card) => {
        card.classList.remove("active");
        if (card.id === selectedPlan) {
          card.classList.add("active");
        }
      });
    });
  });

document.querySelectorAll('.nav-links a, .footer-links a, .hero-button').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = document.querySelector('.header')?.offsetHeight || 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 16; // 16px extra spacing

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});
})

document.querySelectorAll('.hero-button, .nav-links a, .footer-links a, .bottom-nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = document.querySelector('.header')?.offsetHeight || 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 16;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});


