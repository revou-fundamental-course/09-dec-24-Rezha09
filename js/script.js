let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

slides[currentIndex].classList.add('active');

function changeSlide() {
  slides[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + 1) % totalSlides;

  slides[currentIndex].classList.add('active');
}

setInterval(changeSlide, 3000);

let currentPackageIndex = 0;
const packages = document.querySelectorAll('.package-item');
const totalPackages = packages.length;
const visiblePackages = 4;
const packageWidth = packages[0].offsetWidth + 20;

function changePackageSlide() {
  const slider = document.querySelector('.package-slider');
  slider.style.transform = `translateX(-${currentPackageIndex * packageWidth}px)`;
}

function nextPackage() {
  currentPackageIndex = (currentPackageIndex + 1) % (totalPackages - visiblePackages + 1);
  changePackageSlide();
}

function prevPackage() {
  currentPackageIndex = (currentPackageIndex - 1 + totalPackages) % (totalPackages - visiblePackages + 1);
  changePackageSlide();
}

setInterval(nextPackage, 3000);

document.querySelector('.next').addEventListener('click', nextPackage);
document.querySelector('.prev').addEventListener('click', prevPackage);

