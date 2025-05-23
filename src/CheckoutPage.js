import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getItemPrice = (item) =>
    typeof item.price === 'string'
      ? parseFloat(item.price.replace('$', ''))
      : item.price || 0;

  const total = cartItems.reduce(
    (sum, item) => sum + getItemPrice(item) * item.quantity,
    0
  );

  const handleConfirm = () => {
    dispatch({ type: 'CLEAR_CART' });
    alert('Order confirmed!');
    navigate('/');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: '1rem' }}>
              <strong>{item.name}</strong> × {item.quantity}
              <div>Subtotal: ${getItemPrice(item) * item.quantity}</div>
            </div>
          ))}
          <hr />
          <h4>Total: ${total.toFixed(2)}</h4>
          <button className="btn btn-primary mt-3" onClick={handleConfirm}>
            Confirm & Pay
          </button>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
