// // Sidebar
// const menuBtn = document.querySelector(".header__menu");
// const overlay = document.querySelector(".sidebar-overlay");
// const sidebarForm = document.querySelector(".sidebar-form");

// if (menuBtn && overlay && sidebarForm) {
//     menuBtn.onclick = () => {
//         overlay.classList.add("active");
//         sidebarForm.classList.add("active");
//     }
//     overlay.onclick = () => {
//         overlay.classList.remove("active");
//         sidebarForm.classList.remove("active");
//     }
// }

// // Banner
// const bannerTrack = document.querySelector(".banner-track");
// const bannerSlides = document.querySelectorAll(".banner-image");
// const bannerNext = document.querySelector(".banner .button-right");
// const bannerPrev = document.querySelector(".banner .button-left");
// const bannerDots = document.querySelectorAll(".slider-pagination li");

// let bannerIndex = 0;

// function updateBanner() {
//     if (!bannerTrack) return;
//     bannerTrack.style.transform = `translateX(-${bannerIndex * 100}%)`;
//     bannerDots.forEach(dot => dot.classList.remove("active"));
//     if (bannerDots[bannerIndex]) {
//         bannerDots[bannerIndex].classList.add("active");
//     }
// }

// if (bannerNext) {
//     bannerNext.onclick = () => {
//         bannerIndex++;
//         if (bannerIndex >= bannerSlides.length) {
//             bannerIndex = 0;
//         }
//         updateBanner();
//     }
// }

// if (bannerPrev) {
//     bannerPrev.onclick = () => {
//         bannerIndex--;
//         if (bannerIndex < 0) {
//             bannerIndex = bannerSlides.length - 1;
//         }
//         updateBanner();
//     }
// }

// bannerDots.forEach((dot, i) => {
//     dot.addEventListener("click", () => {
//         bannerIndex = i;
//         updateBanner();
//     });
// });

// if (bannerSlides.length > 0) {
//     setInterval(() => {
//         bannerIndex++;
//         if (bannerIndex >= bannerSlides.length) {
//             bannerIndex = 0;
//         }
//         updateBanner();
//     }, 5000);
// }

// // Product Slider
// const productTrack = document.querySelector(".product-track");
// const productItems = document.querySelectorAll(".product-promotion__item");
// const productNext = document.querySelector(".product-promotion .button-right");
// const productPrev = document.querySelector(".product-promotion .button-left");
// const productSlides = document.querySelectorAll(".product-promotion__item");

// let productIndex = 0;

// function updateProductSlider(){
//     if (!productTrack || productItems.length === 0) return;
//     const itemWidth = productItems[0].offsetWidth + 20;
//     productTrack.style.transform =
//         `translateX(-${productIndex * itemWidth}px)`;
// }

// productNext.onclick = () => {
//     const visibleItems = Math.floor(productTrack.offsetWidth / productItems[0].offsetWidth);
//     const maxSlide = productItems.length - visibleItems;

//     productIndex++;
//     if(productIndex > maxSlide){
//         productIndex = 0;
//     }
//     updateProductSlider();
// }

// productPrev.onclick = () => {
//     const visibleItems = Math.floor(productTrack.offsetWidth / productItems[0].offsetWidth);
//     const maxSlide = productItems.length - visibleItems;
//     productIndex--;
//     if(productIndex < 0){
//         productIndex = maxSlide;
//     }
//     updateProductSlider();
// }

// if (productSlides.length > 0) {
//     setInterval(() => {
//         productIndex++;
//         if (productIndex >= productSlides.length - 4) {
//             productIndex = 0;
//         }
//         updateProductSlider();
//     }, 6000);
// }