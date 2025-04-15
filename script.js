
document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('mobile-menu-open');
      const spans = mobileMenuBtn.querySelectorAll('span');
      
      if (navLinks.classList.contains('mobile-menu-open')) {
        spans[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }
  
  // Close mobile menu when clicking on a link
  const menuLinks = document.querySelectorAll('.nav-links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('mobile-menu-open')) {
        navLinks.classList.remove('mobile-menu-open');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });

  // Scroll Animation
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('fade-in');
  });
  
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.1 }
  );
  
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  let lastScrollTop = 0;
  
  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
      // Scrolling down
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up
      navbar.style.transform = 'translateY(0)';
    }
    
    if (scrollTop === 0) {
      navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
    }
    
    lastScrollTop = scrollTop;
  });

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      // Basic form validation
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        markInvalid(nameInput, 'Name is required');
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      if (!emailInput.value.trim()) {
        markInvalid(emailInput, 'Email is required');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        markInvalid(emailInput, 'Please enter a valid email');
        isValid = false;
      } else {
        markValid(emailInput);
      }
      
      if (!subjectInput.value.trim()) {
        markInvalid(subjectInput, 'Subject is required');
        isValid = false;
      } else {
        markValid(subjectInput);
      }
      
      if (!messageInput.value.trim()) {
        markInvalid(messageInput, 'Message is required');
        isValid = false;
      } else {
        markValid(messageInput);
      }
      
      if (isValid) {
        // In a real implementation, you'd send the form data to a server
        // For this example, we'll just show a success message
        contactForm.innerHTML = `
          <div class="form-success">
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        `;
      }
    });
  }
  
  // Helper functions for form validation
  function markInvalid(input, message) {
    input.classList.add('invalid');
    
    // Remove any existing error message first
    const parent = input.parentElement;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
      parent.removeChild(existingError);
    }
    
    // Add new error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = 'red';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    parent.appendChild(errorDiv);
  }
  
  function markValid(input) {
    input.classList.remove('invalid');
    
    // Remove any existing error message
    const parent = input.parentElement;
    const existingError = parent.querySelector('.error-message');
    if (existingError) {
      parent.removeChild(existingError);
    }
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }
});




