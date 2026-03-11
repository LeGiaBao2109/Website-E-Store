const menuBtn = document.querySelector(".header__menu");
const overlay = document.querySelector(".sidebar-overlay");
const sidebarForm = document.querySelector(".sidebar-form");

menuBtn.onclick = () => {
    overlay.classList.add("active");
    sidebarForm.classList.add("active");
}

overlay.onclick = (e) => {
    overlay.classList.remove("active");
    sidebarForm.classList.remove("active");
}

