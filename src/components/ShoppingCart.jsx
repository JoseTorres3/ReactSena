import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/actions';
import '../index.css';

/**
 * @returns {JSX.Element}
 */

export function ShoppingCart({ productId, name, price, img }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity(quantity + 1);

  const handleDecrement = () => setQuantity(Math.max(1, quantity - 1));

  const handleAddCart = () => {
    dispatch(addCart({ productId, name, price, quantity }));
  };

  return (
    <div 
      className="product-card" 
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="product-info">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </div>
        <button onClick={handleAddCart}>Añadir al carrito</button>
      </div>
    </div>
  );
}