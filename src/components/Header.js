import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/products">Products</Link> |{' '}
        <Link to="/cart">
          🛒 Cart ({cartCount})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
