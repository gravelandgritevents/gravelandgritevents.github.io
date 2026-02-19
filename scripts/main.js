document.addEventListener('DOMContentLoaded', () => {
  const capacity = 125;
  const currentEntries = 78;
  const remaining = capacity - currentEntries;

  const remainingSpotsEl = document.getElementById('remaining-spots');
  if (remainingSpotsEl) {
    remainingSpotsEl.textContent = String(Math.max(0, remaining));
  }

  const heroButton = document.querySelector('.hero-ticket-button');
  const stickyButton = document.querySelector('.sticky-ticket');

  if (heroButton && stickyButton) {
    const updateStickyButton = () => {
      const heroButtonBottom = heroButton.getBoundingClientRect().bottom;
      stickyButton.classList.toggle('is-visible', heroButtonBottom < 0);
    };

    updateStickyButton();
    window.addEventListener('scroll', updateStickyButton, { passive: true });
    window.addEventListener('resize', updateStickyButton);
  }
});
