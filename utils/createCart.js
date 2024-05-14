export function createCart(products, cartBody) {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    const cartItems = productsInCart.length > 0 ? productsInCart.map(itemId => `
        <div class="row my-3 align-items-center" data-item-id="${itemId}">
            <div class="col">
                <img src="${products[itemId - 1].image}" class='img-fluid'>
            </div>
            <div class="col">
                <label for="quantity${itemId}">Quantity:</label>
                <input class="form-control" type="number" id="quantity${itemId}" name="quantity${itemId}" min="1" max="99" value=1>
            </div>
            <div class="col">
                <label for="price${itemId}">Price:</label>
                <span id="price${itemId}" class="form-control">${Math.round(products[itemId - 1].price)} $</span>
            </div>
            <div class="col">
                <button type="button" class="btn btn-light mt-4" id='delete-item' aria-label="Close"><i class="bi bi-trash3"></i></button>
            </div>
        </div>
    `).join('') : 'Cart is empty.';

    if (productsInCart) {
        cartBody.innerHTML = cartItems;
    }

    const deleteButtons = document.querySelectorAll('#delete-item');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = button.closest('.row').dataset.itemId;
            removeItemFromCart(itemId);
            createCart(products, cartBody);
        });
    });
}

function removeItemFromCart(itemId) {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    const updatedCart = productsInCart.filter(id => id !== itemId);
    localStorage.setItem('productsInCart', JSON.stringify(updatedCart));
}