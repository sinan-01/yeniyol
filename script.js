// Menü ve Arama Fonksiyonları
function toggleSearch() {
    const searchBox = document.querySelector(".search-box");
    searchBox.classList.toggle("active");
   
    if (searchBox.classList.contains("active")) {
        searchBox.focus();
    }
}

// Close search when clicking outside
document.addEventListener('click', function(event) {
    const searchContainer = document.querySelector('.search-container');
    const searchBox = document.querySelector('.search-box');
   
    if (!searchContainer.contains(event.target)) {
        searchBox.classList.remove('active');
    }
});

// burger-menu
// Menü açma/kapatma fonksiyonu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Hamburger menüye tıklanınca menüyü aç/kapat
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Handle search functionality
const searchBox = document.querySelector('.search-box');
searchBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const searchTerm = this.value;
        alert('Axtarılan: ' + searchTerm);
        // Here you can add your actual search functionality
    }
});

// Slider Fonksiyonları
let currentSlide = 0;
let slideInterval;
const slides = document.querySelectorAll('.slide');
const navBtns = document.querySelectorAll('.nav-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Belirtilen indeksteki slaytı göster
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    navBtns.forEach(btn => btn.classList.remove('active'));
   
    slides[index].classList.add('active');
    navBtns[index].classList.add('active');
    currentSlide = index;
}

// Sonraki slayta geç
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Önceki slayta geç
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Otomatik geçiş için interval başlat
function startInterval() {
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(nextSlide, 5000);
}

// Interval'i sıfırla
function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

// Event Listeners ekle
navBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        showSlide(index);
        resetInterval();
    });
});

prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

// Klavye kontrollerini ekle
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
        resetInterval();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
        resetInterval();
    }
});

// Sayfa yüklendiğinde slider'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    showSlide(0);
    startInterval();
});

// Scroll button
// Tüm kod DOMContentLoaded içine alındı
document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded"); // Scriptin yüklendiğini kontrol etmek için

    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    console.log("Button found:", scrollToTopBtn); // Button'un bulunup bulunmadığını kontrol etmek için
    
    if (scrollToTopBtn) {
        // Scroll olayını dinle
        window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollToTopBtn.style.display = "block";
            } else {
                scrollToTopBtn.style.display = "none";
            }
        });

        // Butona tıklama olayını dinle
        scrollToTopBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});