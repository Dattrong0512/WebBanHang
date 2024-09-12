export const formatter = (number) =>{
    const formatted = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(number);

    // Xử lý chuỗi để loại bỏ khoảng cách nếu cần
    return formatted.replace(/\s/g, ''); // Loại bỏ tất cả khoảng cách
};