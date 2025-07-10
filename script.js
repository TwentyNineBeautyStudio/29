document.addEventListener("DOMContentLoaded", function () {
  const animated = document.querySelectorAll(".fade-in");

  animated.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("muncul");
    }, i * 300);
  });
  // Tambahkan centering katalog
  const katalog = document.querySelector(".btn-katalog");
  if (katalog) {
    katalog.style.display = "block";
    katalog.style.margin = "30px auto 0";
    katalog.style.textAlign = "center";
  }
});

function openPopup(title, desc) {
  document.getElementById("popup-title").textContent = title;
  document.getElementById("popup-desc").textContent = desc;
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Animasi muncul saat scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("muncul");
    }
  });
});

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// --- KODE BARU untuk toggle navbar ---
const toggleBtn = document.querySelector(".toggle-btn");
const navMenu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});