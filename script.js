document.addEventListener("DOMContentLoaded", () => {
  // Array of image filenames from the assets folder
  const images = [
    "0df5ddb0-163d-4e9d-ba77-5e63ac9c4cba.jpeg",
    "1bad05a6-733e-4a5a-854a-7e631b129dce.jpeg",
    "2dc3589d-cd89-4f04-9505-02b317fb4077.jpeg",
    "2f98da09-d04c-4084-9672-a6854ada773f.jpeg",
    "4ec03081-24cf-4448-a0b7-d138b2e77987.jpeg",
    "668c19c5-0815-4901-9ad3-9d407483e9ee.jpeg",
    "67eac2d9-680c-40a6-b5cb-e9116fb09f22.jpeg",
    "754e07ec-6e6a-4c53-89f7-efea620836e3.jpeg",
    "8280ea0b-ab2d-45d5-80ab-df29540bd6e8.jpeg",
    "b87dc9c7-79e1-4981-8b7d-68a1d7ccd6c5.jpeg",
    "b9bb1593-f5fb-4e63-876a-1928a6fa75d2.jpeg",
    "bc0de9f1-6587-4e54-82c0-03b669f66338.jpeg",
    "cc7ae2cc-fd97-4ddf-b5f7-e72e7151b20e.jpeg",
    "d4b3a6d3-a44c-434b-9173-d9f813061759.jpeg",
    "ec433774-012c-4f17-aea0-e9b6aa01751e.jpeg",
    "eedefc7c-d808-4eb0-a448-11fb36f5a1af.jpeg",
    "f19fbdbe-11d2-439e-bc8b-1e7c649ac81e.jpeg",
    "f6bc5d10-6e29-4a58-9a00-a4b50c7840c2.jpeg",
    "f7127af6-5b15-44ef-9d7c-bb9646e2875e.jpeg",
    "fb120ec5-377d-404a-a7ca-3d2c9667856c.jpeg",
    "fbd4771d-7a7b-45ae-a97a-79a4cdec6281.jpeg",
  ];

  // Background Slider Logic (Home Page)
  const sliderContainer = document.getElementById("backgroundSlider");
  if (sliderContainer) {
    let currentIndex = 0;
    // Limit slider images to first 10 for performance/aesthetic
    const sliderImages = images.slice(0, 10);

    // Preload images and create divs
    sliderImages.forEach((img, index) => {
      const slide = document.createElement("div");
      slide.classList.add("slide");
      slide.style.backgroundImage = `url('assets/${img}')`;
      if (index === 0) slide.classList.add("active");
      sliderContainer.appendChild(slide);
    });

    const slides = document.querySelectorAll(".slide");

    function nextSlide() {
      slides[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add("active");
    }

    setInterval(nextSlide, 5000);
  }

  // Portfolio Grid Logic (Portfolio Page)
  const portfolioGrid = document.getElementById("portfolioGrid");
  if (portfolioGrid) {
    // Modal Elements
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeBtn = document.getElementsByClassName("close")[0];

    images.forEach((img) => {
      const item = document.createElement("div");
      item.classList.add("portfolio-item");

      const image = document.createElement("img");
      image.src = `assets/${img}`;
      image.alt = "Portfolio Image";
      image.loading = "lazy";

      const overlay = document.createElement("div");
      overlay.classList.add("portfolio-overlay");
      overlay.innerHTML = '<i class="fas fa-plus"></i>'; // Icon on hover

      item.appendChild(image);
      item.appendChild(overlay);
      portfolioGrid.appendChild(item);

      // Add Click Event for Modal
      item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = `assets/${img}`;
      });
    });

    // Close Modal Logic
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  // Header Scroll Effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("is-active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll(".nav-menu a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("is-active");
        navMenu.classList.remove("active");
      });
    });
  }
});
