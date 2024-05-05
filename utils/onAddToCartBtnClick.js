const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];

export function onAddToCartBtnClick (event) {
    // Check if the clicked element is a button with the "add-to-cart-btn" id
    if (event.target.id && event.target.id.includes('add-to-cart-btn')) {
        // Get the clicked product id
        const productId = event.target.closest('.card').id;

        if (!productsInCart.includes(productId)) {
            productsInCart.push(productId)
            localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
        }
    }
}