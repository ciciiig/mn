import { fetchCategories, fetchProducts } from "./services/fetchData.js";
import { createNavItems } from "./utils/createNavItems.js";
import { createPaymentMethods } from "./utils/createPaymentMethods.js";
import { createProcutsCards } from "./utils/createProductCards.js";
import { registerThroughLocalStorage } from "./utils/registerThroughLocalStorage.js";
import { loginThroughLocalStorage } from "./utils/loginThroughLocalStorage.js";
import { showUsername } from "./utils/showUsername.js";
import { logout } from "./utils/logout.js";

const appState = {
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
    users: JSON.parse(localStorage.getItem('users')) || [],
}

const elements = {
    appContainer: document.getElementById('app-container'),
    navItemsContainer: document.querySelector('#main-nav2 .navbar-nav'),
    paymentContainer: document.getElementById('payment-container'),
    topProductsCardsContainer: document.getElementById('top-products-cards-container'),
    loginForm: document.forms['loginForm'],
    registerForm: document.forms['registerForm'],
    logoutBtn: document.getElementById('logoutBtn'),
}

function render() {
    createNavItems(elements.navItemsContainer, appState.categories);
    createPaymentMethods(elements.paymentContainer, appState.paymentMethods);
    createProcutsCards(elements.topProductsCardsContainer, appState.products)

    showUsername(appState.users)
}

function handleClickLogin (e)  {
    e.preventDefault();

    // handle Login through Local Storage
    const loginFormData = new FormData(e.target);
    const loginEmail = loginFormData.get('loginEmail');
    const loginPassword = loginFormData.get('loginPassword');

    loginThroughLocalStorage(loginEmail, loginPassword, appState.users)
    showUsername(appState.users)
}

function handleClickRegister (e) {
    e.preventDefault();

    // handle register through Local Storage
    const registerFormData = new FormData(e.target);
    const registerEmail = registerFormData.get('registerEmail');
    const registerPassword = registerFormData.get('registerPassword');
    registerThroughLocalStorage(registerEmail, registerPassword, appState.users)
}



function addAndRemoveListeners() {
    elements.loginForm.removeEventListener('submit', handleClickLogin);
    elements.registerForm.removeEventListener('submit', handleClickRegister);
    elements.logoutBtn.removeEventListener('click', () => logout(appState.users));
    
    elements.loginForm.addEventListener('submit', handleClickLogin);
    elements.registerForm.addEventListener('submit', handleClickRegister);
    elements.logoutBtn.addEventListener('click', () => logout(appState.users));
}

async function initializePage() {
    // fetch data
    appState.categories = await fetchCategories(appState);
    appState.products = await fetchProducts(appState);

    // if no data stop app working
    if (appState.error) return;
    
    // render
    render()
    
    // set listeners
    addAndRemoveListeners();
}

// RUN APP
initializePage();
