import React from 'react';
import ProductCard from './ProductCard'; // ✅ Correct

const ProductList = ({ items, onAddToCart }) => (
  <div className="row g-4">
    {items.map((item) => (
      <ProductCard key={item.id} item={item} onAddToCart={onAddToCart} />
    ))}
  </div>
);


export default ProductList;
