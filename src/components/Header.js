import React from 'react';
import CartBar from './CartBar';

const Header = ({ cartItems, onCheckout }) => (
  <header className="bg-success text-white sticky-top">
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <h3 className="fw-bold m-0 navbar-brand">Harsh Store</h3>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#categories">Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">All Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          <CartBar cartItems={cartItems} onCheckout={onCheckout} />
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
