import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <h1>Ich bin Checkouit Page</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const { id, name, quantity } = cartItem;
                        return (
                            <div key={id}>
                                <h2>{name}</h2>
                                <span>{quantity}</span>
                                <br />
                                <span onClick={
                                    () => removeItemFromCart(cartItem)}
                                >
                                    Decrement
                                </span>
                                <br />
                                <span onClick={
                                    () => addItemToCart(cartItem)}
                                >
                                    Increment
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Checkout;