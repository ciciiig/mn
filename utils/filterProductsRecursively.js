export function filterProductsRecursively(products, query) {
    if (products.length === 0) return [];

    const [firstProduct, ...restProducts] = products;
  
    const regex = new RegExp(query, "i");
  
    const isMatch = regex.test(firstProduct.title) || regex.test(firstProduct.description);
  
    return isMatch
      ? [firstProduct, ...filterProductsRecursively(restProducts, query)]
      : [...filterProductsRecursively(restProducts, query)];
}