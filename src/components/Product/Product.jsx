import React from 'react';
import '../Product/Product.css'

// Font Awesome
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handleAddToCart }) => {
    const { id, name, category, price, seller, img, quantity, ratings, ratingCount, stock } = product;
    // const handleAddToCart = (product) => {
    //     console.log(product);
    // }

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h1 className='product-title'>{name}</h1>
            <p><b>Price: ${price}</b></p>
            <p className='manufacturer'>Manufacturer: {seller}</p>
            <p><b>Rating: {ratings} start</b></p>
            <button id='add-to-cart-btn' onClick={() => handleAddToCart(product)}>
                Add to cart 
                <FontAwesomeIcon className='shopping-cart-icon' icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;