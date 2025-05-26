
      // Theme toggle functionality
      let isDarkMode = false;
      
      function toggleTheme() {
        isDarkMode = !isDarkMode;
        const body = document.body;
        const themeIcon = document.getElementById('theme-icon');
        const themeIconDesktop = document.getElementById('theme-icon-desktop');
        
        if (isDarkMode) {
          body.classList.remove('light-theme');
          body.classList.add('dark-theme');
          themeIcon.classList.remove('fa-moon');
          themeIcon.classList.add('fa-sun');
          themeIconDesktop.classList.remove('fa-moon');
          themeIconDesktop.classList.add('fa-sun');
        } else {
          body.classList.remove('dark-theme');
          body.classList.add('light-theme');
          themeIcon.classList.remove('fa-sun');
          themeIcon.classList.add('fa-moon');
          themeIconDesktop.classList.remove('fa-sun');
          themeIconDesktop.classList.add('fa-moon');
        }
      }
      
      // Navbar scroll effect
      let isScrolled = false;
      
      function updateNavbar() {
        const navbar = document.getElementById('navbar');
        
        if (window.scrollY > 50) {
          if (!isScrolled) {
            navbar.classList.add('navbar-scrolled');
            isScrolled = true;
          }
        } else {
          if (isScrolled) {
            navbar.classList.remove('navbar-scrolled');
            isScrolled = false;
          }
        }
      }
      
      window.addEventListener('scroll', updateNavbar);
      
      // Smooth scroll to top
      function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
      
      // Smooth scroll for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
          
          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        });
      });
      
      // Initialize fade-in animations on scroll
      function animateOnScroll() {
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        });
      }
      
      // Set initial styles for fade-in elements
      document.querySelectorAll('.fade-in').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      });
      
      window.addEventListener('scroll', animateOnScroll);
      window.addEventListener('load', animateOnScroll);
      
      // Auto-close navbar on mobile when clicking outside
      document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (!navbar.contains(event.target) && navbarCollapse.classList.contains('show')) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
 const year = new Date().getFullYear();
document.getElementById("date").textContent = year;

