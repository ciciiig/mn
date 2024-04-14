import { fetchCategories, fetchProducts } from "./services/fetchData.js";
import { createNavItems } from "./utils/createNavItems.js";
import { createPaymentMethods } from "./utils/createPaymentMethods.js";
import { createProcutsCards } from "./utils/createProductCards.js";

const appState = {
    url: {
        allProducts: 'https://fakestoreapi.com/products',
        allCategories: 'https://fakestoreapi.com/products/categories',
    },
    error: '',
    categories: [],
    products: [],
    paymentMethods: [
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png',
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png',
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png',
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png',
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png',
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png',
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png',
        'https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png',
    ],
}

const elements = {
    appContainer: document.getElementById('app-container'),
    navItemsContainer: document.querySelector('#main-nav2 .navbar-nav'),
    paymentContainer: document.getElementById('payment-container'),
    topProductsCardsContainer: document.getElementById('top-products-cards-container'),
}

function render() {
    createNavItems(elements.navItemsContainer, appState.categories);
    createPaymentMethods(elements.paymentContainer, appState.paymentMethods);
    createProcutsCards(elements.topProductsCardsContainer, appState.products)
}

async function initializePage() {
    // fetch data
    appState.categories = await fetchCategories(appState);
    appState.products = await fetchProducts(appState);
    // if no data stop app working
    if (appState.error) return;
    // render
    render()
}

// RUN APP
initializePage();
