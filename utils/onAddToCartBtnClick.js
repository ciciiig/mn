import { createCart } from "./createCart.js";

export function onAddToCartBtnClick(event, products, cartBody) {
    if (event.target.id && event.target.id.includes('add-to-cart-btn')) {
        const productId = event.target.closest('.card').id;

        let productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
        
        if (!productsInCart.includes(productId)) {
            productsInCart.push(productId);
            localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
        }
    }

    createCart(products, cartBody);
}