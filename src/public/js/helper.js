export const formatVND = (price) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(price);
};

export const calculateDiscount = (price, percentage) => {
    return price * (1 - percentage / 100);
};