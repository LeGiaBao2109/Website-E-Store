const menuBtn = document.querySelector(".header__menu");
const overlay = document.querySelector(".sidebar-overlay");
const sidebarForm = document.querySelector(".sidebar-form");

if (menuBtn && overlay && sidebarForm) {
    menuBtn.addEventListener("click", () => {
        overlay.classList.add("active");
        sidebarForm.classList.add("active");
    });

    overlay.addEventListener("click", () => {
        overlay.classList.remove("active");
        sidebarForm.classList.remove("active");
    });
}

const categories = document.querySelectorAll(".category-item");
const content = document.getElementById("sidebarContent");
const data = {
    phones: `
        <div class="filter-section" data-category="phones">
                                <h4>Hãng điện thoại</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Hãng tablet</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Mức giá</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">Dưới 2 triệu</button>
                                    <button class="filter-btn">2-4 triệu</button>
                                    <button class="filter-btn">4-7 triệu</button>
                                    <button class="filter-btn">7-13 triệu</button>
                                    <button class="filter-btn">Trên 13 triệu</button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Máy hot</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">Iphone 17 Pro Max</button>
                                    <button class="filter-btn">Iphone 16</button>
                                    <button class="filter-btn">Ipad mini 7</button>
                                </div>
                            </div>
    `,
    laptop: `
       <div class="filter-section" data-category="phones">
                                <h4>Hãng điện thoại</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn active">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Hãng tablet</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn active">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Mức giá</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">Dưới 2 triệu</button>
                                    <button class="filter-btn">2-4 triệu</button>
                                    <button class="filter-btn">4-7 triệu</button>
                                    <button class="filter-btn">7-13 triệu</button>
                                    <button class="filter-btn">Trên 13 triệu</button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Máy hot</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">Iphone 17 Pro Max</button>
                                    <button class="filter-btn">Iphone 16</button>
                                    <button class="filter-btn">Ipad mini 7</button>
                                </div>
                            </div>
    `,
    tv: `
        <div class="filter-section" data-category="phones">
                                <h4>Hãng điện thoại</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn active">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                    <button class="filter-btn">
                                        <img src="../public/images/brand-apple.svg" alt="">
                                    </button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Mức giá</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">Dưới 2 triệu</button>
                                    <button class="filter-btn">2-4 triệu</button>
                                    <button class="filter-btn">4-7 triệu</button>
                                    <button class="filter-btn">7-13 triệu</button>
                                    <button class="filter-btn">Trên 13 triệu</button>
                                </div>
                            </div>

                            <div class="filter-section">
                                <h4>Máy hot</h4>
                                <div class="filter-buttons">
                                    <button class="filter-btn">Iphone 17 Pro Max</button>
                                    <button class="filter-btn">Iphone 16</button>
                                    <button class="filter-btn">Ipad mini 7</button>
                                </div>
                            </div>
    `
};

categories.forEach(item => {
    item.addEventListener("mouseenter", () => {
        if (window.innerWidth > 992) {
            const category = item.dataset.category;

            categories.forEach(i => i.classList.remove("active"));
            item.classList.add("active");

            content.innerHTML = data[category] || "";
            content.classList.add("active");
        }
    });
});

const sidebar = document.querySelector(".sidebar");
if (sidebar) {
    sidebar.addEventListener("mouseleave", () => {
        if (window.innerWidth > 992) {
            content.classList.remove("active");
        }
    });
}

categories.forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 992) {
            const category = item.dataset.category;

            content.innerHTML = `
                <div class="sidebar-back">
                    <i class="fa-solid fa-arrow-left"></i> Quay lại
                </div>
                ${data[category] || ""}
            `;

            content.classList.add("active");
        }
    });
});

document.addEventListener("click", (e) => {
    if (e.target.closest(".sidebar-back")) {
        content.classList.remove("active");
    }
});