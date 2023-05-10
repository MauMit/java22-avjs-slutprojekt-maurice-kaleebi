import React from 'react';
import '../css/App.css'
import { Link } from 'react-router-dom';


export default function Header({ cartItemsCount }) {


  return (
    <header className="block row center">
      <div>
        <h1>Maurice's Store</h1>
      </div>


      <div>
        <Link to="/">
          Home
        </Link>
      </div>

      <div>
        <p># of items in the cart: {cartItemsCount}</p>
      </div>

      <div>
        <Link to="/cart">
          Cart
        </Link>
      </div>
    </header>
  );
}