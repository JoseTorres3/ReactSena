// actions.jsx

export const ADD_CART = 'ADD_CART';
export const DELETE_CART = 'DELETE_CART';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

/**
 * Acción para añadir un producto al carrito
 * @param {Object} product - Producto a añadir, incluye { productId, name, price, quantity }
 * @returns {Object} Acción de tipo ADD_CART
 */
export const addCart = (product) => ({
  type: ADD_CART,
  payload: product
});

/**
 * Acción para eliminar un producto del carrito
 * @param {number} productId - ID del producto a eliminar
 * @returns {Object} Acción de tipo DELETE_CART
 */
export const deleteCart = (productId) => ({
  type: DELETE_CART,
  payload: productId
});
