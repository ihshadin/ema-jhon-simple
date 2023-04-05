import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        // console.log(storedCart[id]);
        const addedProduct = products.find(pd => pd.id === id);
        // console.log(addedProduct);
        if (addedProduct) {
            const quantity = storedCart[id];
            // console.log(quantity);
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    return savedCart;
}

export default cartProductsLoader;