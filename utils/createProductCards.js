export function createProcutsCards (cardsContainer, products) {
    for (let i = 0; i < 4; i++) {
        const element = products[i];

        // Create the card div
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('col');

        // Create the card element
        const card = document.createElement('div');
        card.classList.add('card');

        // Create the image element
        const image = document.createElement('img');
        image.classList.add('card-img-top', 'img-size', 'mx-auto', 'mt-3');
        image.title = element.title;
        image.src = element.image;

        // Create the card body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        // Create the div for title and price
        const titlePriceDiv = document.createElement('div');
        titlePriceDiv.classList.add('d-flex', 'justify-content-between');

        // Create title element
        const title = document.createElement('h4');
        title.classList.add('card-title', 'text-truncate', 'fs-md-1');
        title.style.maxWidth = '150px';
        title.title = element.title;
        title.textContent = element.title;

        // Create price element
        const price = document.createElement('h4');
        price.textContent = `$ ${element.price}`;

        // Create description paragraph
        const description = document.createElement('p');
        description.classList.add('card-text', 'text-truncate');
        description.title = element.description
        description.textContent = element.description;

        // Create add to cart button
        const addToCartBtn = document.createElement('a');
        addToCartBtn.href = '#';
        addToCartBtn.classList.add('btn', 'btn-outline-primary');
        addToCartBtn.textContent = 'Add to cart';

        // Append title and price to titlePriceDiv
        titlePriceDiv.appendChild(title);
        titlePriceDiv.appendChild(price);

        // Append elements to their respective parents
        cardBody.appendChild(titlePriceDiv);
        cardBody.appendChild(description);
        cardBody.appendChild(addToCartBtn);

        card.appendChild(image);
        card.appendChild(cardBody);

        cardDiv.appendChild(card);

        cardsContainer.appendChild(cardDiv);
    }
}