export async function fetchCategories(appState) {
    try {
        const response = await fetch(appState.url.allCategories);
        return await response.json();
    } catch (error) {
        appState.error = error
    }
}

export async function fetchProducts(appState) {
    try {
        const response = await fetch(appState.url.allProducts);
        return await response.json();
    } catch (error) {
        appState.error = error
    }
}
