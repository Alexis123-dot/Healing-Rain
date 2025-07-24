document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const backToTopBtn = document.getElementById('backToTop');

    // Toggle mobile navigation
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu on link click
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    navToggle.classList.remove('active');
                }
            });
        });
    }

    // Smooth scroll for same-page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Show/hide scroll-to-top button
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  // Optional: Close nav when a link is clicked
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (mainNav.classList.contains('active')) {
        mainNav.classList.remove('active');
        navToggle.classList.remove('active');
      }
    });
  });
});


/* GENERAL HEADER STYLING */
.main-header {
    background: #fff;
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.main-header .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
}

/* LOGO */
.logo img {
    max-height: 40px;
    width: auto;
}

/* NAV MENU */
.main-nav ul {
    list-style: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

.main-nav ul li a {
    text-decoration: none;
    font-weight: 600;
    color: #333;
    transition: color 0.3s;
}

.main-nav ul li a:hover {
    color: #007bff;
}

/* HAMBURGER BUTTON */
.nav-toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
}

.nav-toggle .bar {
    height: 3px;
    width: 25px;
    background-color: #333;
    margin: 4px 0;
    transition: 0.3s;
}

/* MOBILE RESPONSIVENESS */
@media (max-width: 768px) {
    .main-nav {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        background: white;
        width: 200px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        padding: 10px 0;
    }

    .main-nav.active {
        display: flex;
    }

    .nav-toggle {
        display: flex;
    }

    .main-nav ul {
        flex-direction: column;
        text-align: center;
    }

    .main-nav ul li {
        margin: 10px 0;
    }
}
