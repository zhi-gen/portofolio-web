// Fungsi aman untuk ambil elemen
function getElement(id) {
  const el = document.getElementById(id);
  if (!el) console.warn(`Elemen #${id} tidak ditemukan`);
  return el;
}

// 1. Mobile Menu Toggle
const menuToggle = getElement('menu-toggle');
const mobileMenu = getElement('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// 2. Dark Mode Toggle
const themeToggle = getElement('theme-toggle');
const sunIcon = getElement('sun-icon');
const moonIcon = getElement('moon-icon');

if (themeToggle && sunIcon && moonIcon) {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    document.documentElement.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }

  themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  });
}

// 3. Animasi Saat Scroll
const animateSections = () => {
  document.querySelectorAll('#about, #portfolio, #contact').forEach(section => {
    const pos = section.getBoundingClientRect();
    if (pos.top < window.innerHeight * 0.8) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('load', animateSections);
window.addEventListener('scroll', animateSections);

// 4. Filter Portofolio
const filterBtns = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');

if (filterBtns.length > 0 && projects.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active', 'bg-indigo-600', 'text-white'));
      btn.classList.add('active', 'bg-indigo-600', 'text-white');

      const filter = btn.getAttribute('data-filter');
      projects.forEach(project => {
        const category = project.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          project.style.display = 'block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
}

// 5. Back to Top
const backToTop = getElement('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      backToTop.classList.remove('opacity-0', 'invisible');
      backToTop.classList.add('opacity-100', 'visible');
    } else {
      backToTop.classList.add('opacity-0', 'invisible');
      backToTop.classList.remove('opacity-100', 'visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// 6. Form Kontak
const form = getElement('contact-form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah dikirim.');
    form.reset();
  });
}

// 7. Custom Cursor
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
  window.addEventListener('mousemove', e => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorOutline.style.left = `${e.clientX}px`;
    cursorOutline.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll('a, button, .project-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursorOutline.style.width = '50px';
      cursorOutline.style.height = '50px';
      cursorOutline.style.border = '2px solid #818cf8';
      cursorDot.style.width = '12px';
      cursorDot.style.height = '12px';
    });
    item.addEventListener('mouseleave', () => {
      cursorOutline.style.width = '40px';
      cursorOutline.style.height = '40px';
      cursorOutline.style.border = '2px solid #4f46e5';
      cursorDot.style.width = '8px';
      cursorDot.style.height = '8px';
    });
  });
}
