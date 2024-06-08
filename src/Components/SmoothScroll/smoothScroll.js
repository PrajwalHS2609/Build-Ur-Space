export const smoothScroll = (el) => {
  const headerOffset = 120; // Adjust this value to offset for a fixed header
  const elementPosition = el.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  })
};