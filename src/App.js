import React, { useEffect, useState } from 'react';
import './App.css';
import { items } from './utils/cartData';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ScrollSpyMenu from './components/ScrollSpyMenu';
import Spinner from './components/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleAddToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
    toast.success(`${item.name} added to cart!`);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div
      data-bs-spy="scroll"
      data-bs-target="#scrollspyMenu"
      data-bs-offset="100"
      tabIndex="0"
      className="min-vh-100 bg-secondary"
    >
      <Header cartItems={cartItems} onCheckout={handleCheckout} />
      <ToastContainer position="top-right" autoClose={2000} />

      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-md-2 d-none d-md-block">
            <ScrollSpyMenu />
          </div>
          <div className="col-md-10" id="products">
            <Routes>
              <Route
                path="/"
                element={loading ? <Spinner /> : <ProductList items={items} onAddToCart={handleAddToCart} />}
              />
              <Route path="/checkout" element={<CheckoutPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
