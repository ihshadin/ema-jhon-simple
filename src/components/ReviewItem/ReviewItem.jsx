import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product, handleRemoveFromCart }) => {
    const { id, img, name, price, quantity } = product;
    const totalPrice = price * quantity;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div>
                <h2 className='title'>{name}</h2>
                <p className='price'>Price: <span className='orange-text'>${price}</span></p>
                <p className='quantity'>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <span onClick={() => handleRemoveFromCart(id)} className='review-trash'><FontAwesomeIcon icon={faTrashAlt} /></span>
        </div>
    );
};

export default ReviewItem;