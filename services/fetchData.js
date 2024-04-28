export async function fetchCategories(appState) {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        return await response.json();
    } catch (error) {
        appState.error = error
    }
}

export async function fetchProducts(appState) {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        return await response.json();
    } catch (error) {
        appState.error = error
    }
}

export async function fetchUsers(appState) {
    try {
        const response = await fetch('https://fakestoreapi.com/users');
        return await response.json();
    } catch (error) {
        appState.error = error
    }
}