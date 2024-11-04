 //Đồng hồ đếm ngược
 const hoursToCountdown = 72;
 const endDate = new Date(new Date().getTime() +  + hoursToCountdown * 60 * 60 * 1000);

 function updateCountdown() {
     const now = new Date().getTime();
     const distance = endDate - now;

     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

     document.getElementById("days").innerText = String(days).padStart(2, '0');
     document.getElementById("hours").innerText = String(hours).padStart(2, '0');
     document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
     document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

     if (distance < 0) {
         clearInterval(countdownInterval);
         document.querySelector(".countdown").innerHTML = "Promotion Ended";
     }
 }

 const countdownInterval = setInterval(updateCountdown, 1000);

 updateCountdown();


//slide, see product
 let currentSlide = 0;
 const slides = document.querySelectorAll('.carousel-slide');
 const totalSlides = slides.length;
 const slideWidth = slides[0].clientWidth + 8; 
 
 function updateCarousel() {
     const carouselTrack = document.querySelector('.carousel-track');
     carouselTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
 }
 
 function nextSlide() {
     if (currentSlide < totalSlides - 1) {
         currentSlide++;
     } else {
         currentSlide = 0;
     }
     updateCarousel();
 }
 
 function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; 
    }
    updateCarousel();
}
 function showOriginal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('originalImage');
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById('modal').style.display = "none";
} 

 