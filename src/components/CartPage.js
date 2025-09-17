import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementItem, decrementItem, removeFromCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice}</p>

      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} width="80" />
          <div>
            <h3>{item.name}</h3>
            <p>Unit Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(incrementItem(item.id))}>+</button>
            <button onClick={() => dispatch(decrementItem(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        </div>
      ))}

      <button onClick={() => alert('Checkout Coming Soon!')}>Checkout</button>
      <Link to="/products">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartPage;
