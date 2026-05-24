import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './Contexts/CartContext.jsx';

ReactDom.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);

