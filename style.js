// JavaScript untuk slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slider-wrapper .card"); // Ambil semua card dalam slider
const totalSlides = slides.length; // Total jumlah slide
const prevButton = document.querySelector(".prev"); // Tombol prev
const nextButton = document.querySelector(".next"); // Tombol next

// Fungsi untuk menampilkan slide tertentu
function showSlide(index) {
  if (index >= totalSlides)
    currentSlide = 0; // Jika melewati jumlah slide, kembali ke 0
  else if (index < 0)
    currentSlide = totalSlides - 1; // Jika kurang dari 0, ke slide terakhir
  else currentSlide = index;

  const newTransformValue = `translateX(-${currentSlide * 100}%)`;
  document.querySelector(".slider-wrapper").style.transform = newTransformValue;
}

// Menambahkan event listener untuk tombol next dan prev
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));
prevButton.addEventListener("click", () => showSlide(currentSlide - 1));

// Menambahkan navigasi otomatis (opsional)
setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000); // Ganti slide setiap 5 detik

document.getElementById("menu-toggle").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-pilihan");
  navMenu.classList.toggle("active");
});
