// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

// Apply saved theme
if (savedTheme === 'dark') {
  body.classList.remove("light-theme");
  body.classList.add("dark-theme");
  themeToggle.innerHTML = '<i class="bi bi-moon-fill"></i> Dark';
} else {
  themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i> Light';
}

// Theme toggle button functionality
themeToggle.addEventListener("click", function () {
  if (body.classList.contains("light-theme")) {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    this.innerHTML = '<i class="bi bi-moon-fill"></i> Dark';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    this.innerHTML = '<i class="bi bi-sun-fill"></i> Light';
    localStorage.setItem('theme', 'light');
  }
});

// Resume button functionality
document.getElementById('resumeBtn').addEventListener('click', function(e) {
  e.preventDefault();
  window.open(this.href, '_blank');
});

// Form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
    alert("Please fill out all the fields!");
  } else {
    alert("Message sent successfully! 🎉 I'll get back to you soon.");
    document.querySelector('.contact-form').reset();
  }
}

// Rest of your JavaScript remains the same
// Image modal
document.querySelector('.hero-img').addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    cursor: zoom-out;
  `;
  modal.innerHTML = `
    <img src="myimg.jpg" style="border-radius:30px;border:3px solid var(--primary); max-height:80%;max-width:80%" />
  `;
  modal.addEventListener('click', () => modal.remove());
  document.body.appendChild(modal);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Remove active class from all nav items
    document.querySelectorAll('nav a').forEach(item => {
      item.classList.remove('active');
    });
    
    // Add active class to clicked nav item
    this.classList.add('active');
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Highlight active section in navigation
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= (sectionTop - 150)) {
      current = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === `#${current}`) {
      item.classList.add('active');
    }
  });
});

// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('section, .project, .education-item');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Set initial state for animation
document.querySelectorAll('section, .project, .education-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
});

window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);