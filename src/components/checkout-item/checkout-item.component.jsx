import { useDispatch, useSelector } from 'react-redux';

import './checkout-item.styles.scss';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.action'


const CheckOutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItemsSelector = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(cartItemsSelector, cartItem));

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItemsSelector, cartItem));

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItemsSelector, cartItem));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem;