// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
    }
  });

  // Close mobile menu when clicking on a link
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll effect to header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.classList.add("bg-white", "shadow-lg");
  } else {
    header.classList.remove("shadow-lg");
  }
});

// Feature card hover effects
const featureCards = document.querySelectorAll(".feature-card");
featureCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

// testimonials
$(document).ready(function () {
  $(".testimonials-slide").slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
});

//
function toggleMobileDropdown(button) {
  const submenu = button.nextElementSibling;
  const isActive = submenu.classList.contains('active');
  
  // Đóng tất cả dropdown khác
  document.querySelectorAll('.mobile-submenu.active').forEach(menu => {
      if (menu !== submenu) {
          menu.classList.remove('active');
          menu.previousElementSibling.classList.remove('active');
      }
  });
  
  // Toggle dropdown hiện tại
  if (isActive) {
      submenu.classList.remove('active');
      button.classList.remove('active');
  } else {
      submenu.classList.add('active');
      button.classList.add('active');
  }
  
  document.addEventListener('click', function handleClickOutside(e) {
    if (!button.contains(e.target) && !submenu.contains(e.target)) {
      submenu.classList.remove('active');
      button.classList.remove('active');
      document.removeEventListener('click', handleClickOutside); // gỡ listener sau khi chạy
    }
  });
}