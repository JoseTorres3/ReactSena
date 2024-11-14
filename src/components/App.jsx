import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { ShoppingCart } from './ShoppingCart';
import { Cart } from './Cart';
import img1 from '../img/camisa1.jpg'
import img2 from '../img/camisa2.jpg'
import img3 from '../img/camisa3.jpg'
import img4 from '../img/camisa4.jpg'


const productos = [
  { productId: 1, name: 'Camisa Milan', price: 70000, img: img1 },
  { productId: 2, name: 'Camisa Barcelona', price: 70000, img: img2 },
  { productId: 3, name: 'Camisa Colombia', price: 65000, img: img3 },
  { productId: 4, name: 'Camisa Manchester U', price: 70000, img: img4 },
];

export default function App() {
  return (
    <Provider store={store}>
      <div className="card">
        <div className="product-list">
          {productos.map(({ productId, name, price, img }) => (
            <ShoppingCart key={productId} productId={productId} name={name} price={price} img={img} />
          ))}
        </div>
        <Cart />
      </div>
    </Provider>
  );
}
