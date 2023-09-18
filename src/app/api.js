
export const allProducts = async () => {
    const res = fetch(`https://fakestoreapi.com/products`, { cache: 'no-store' });
    const products = (await res).json();
    return products;
};

