const productTemplate = (item) => {
    const finalPrice = item.price * (1 - item.discountPercentage / 100);
    
    return `
        <div class="product-card__item border-0 d-inline-block w-100 shadow-sm mb-3">
            <div class="product-card__item--image">
                <img src="${item.thumbnail}" alt="${item.title}" class="img-fluid">
            </div>
            <div class="product-card__item--content p-3">
                <h4 class="product-card__item--title text-truncate">${item.title}</h4>
                <div class="product-card__item-price">
                    <div class="product-card__item-price--discount-promotion text-danger fw-bold">
                        ${new Intl.NumberFormat('vi-VN').format(finalPrice)}đ
                    </div>
                    <div class="product-card__item-price--original-promotion text-decoration-line-through small text-muted">
                        ${new Intl.NumberFormat('vi-VN').format(item.price)}đ
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <span class="badge bg-warning text-dark small">Còn: ${item.stock}</span>
                    <button class="btn btn-sm btn-primary"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>
            </div>
        </div>
    `;
};

export const renderProducts = async (apiUrl, containerId) => {
    try {
        const response = await fetch(apiUrl);
        const products = await response.json();
        const container = document.getElementById(containerId);

        if (container && products.length > 0) {
            container.innerHTML = products.map(item => productTemplate(item)).join('');
        } else {
            container.innerHTML = '<p class="text-center w-100">Đang cập nhật sản phẩm...</p>';
        }
    } catch (error) {
        console.error("Lỗi Fetch Data:", error);
    }
};