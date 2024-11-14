// Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCart } from '../redux/actions';

/**
 * Componente para mostrar los productos en el carrito
 * @returns {JSX.Element}
 */
export function Cart() {
  const items = useSelector(state => state.storeCart.items);
  const dispatch = useDispatch();

  // Manejador para eliminar un producto del carrito
  const handleDelete = (productId) => {
    dispatch(deleteCart(productId));
  };

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
              <button onClick={() => handleDelete(item.productId)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
