export function createCart(products, appContainer) {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart')) || [];
    const noItems = 'No items added yet.';
    const cartBody = productsInCart.length > 0 ? productsInCart.map(itemId => `
        <div class="row">
            <div class="col">
                <img src="${products[itemId - 1].image}" class='img-fluid'>
            </div>
            <div class="col">
                Quantity <!-- Add quantity logic -->
            </div>
            <div class="col">
                Price <!-- Add price logic -->
            </div>
        </div>
    `).join('') : noItems;

    let cartBodyContainer = appContainer.querySelector("#cart-body");

    if (!cartBodyContainer) {
        const cartMarkup = `
            <div class="offcanvas offcanvas-end" tabindex="-1" data-bs-scroll="true" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Cart</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body" id="cart-body">
                    ${cartBody}
                </div>
            </div>
        `;

        const cartContainer = document.createElement("div");
        cartContainer.innerHTML = cartMarkup;

        appContainer.appendChild(cartContainer);
    } else {
        cartBodyContainer.innerHTML = cartBody;
    }
}