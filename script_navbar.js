document.addEventListener('DOMContentLoaded', function () {
  const navBar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('nav a');

  const sectionPositions = [];
  sections.forEach(section => {
    sectionPositions.push(section.offsetTop);
  });

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    let currentIndex = sectionPositions.length - 1;

    sectionPositions.forEach((position, index) => {
      if (scrollY >= position) {
        currentIndex = index;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
    });

    navLinks[currentIndex].classList.add('active');

    sections.forEach((section, index) => {
      if (index === currentIndex) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navBar.classList.add('fixed-section');
    } else {
      navBar.classList.remove('fixed-section');
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const targetOffset = targetSection.offsetTop;

      window.scrollTo({
        top: targetOffset,
        behavior: 'smooth'
      });
    });
  });
});
