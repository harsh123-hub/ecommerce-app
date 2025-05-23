import React from 'react';

const ProductCard = ({ item, onAddToCart }) => (
  <div className="col-12 col-sm-6 col-md-4">
    <div className="card h-100">
      <img
        src={item.image}
        className="card-img-top"
        alt={item.name}
        style={{ height: '200px', objectFit: 'contain' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text text-muted">{item.price}</p>
        <button onClick={onAddToCart} className="btn btn-warning mt-auto">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
