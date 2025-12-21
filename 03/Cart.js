import React from 'react';

function Cart({ children }) {
  return (
    <section>
      <h2>Cart</h2>
      {children && children.length > 0 ? children : <p>Koszyk jest pusty</p>}
    </section>
  );
}

export default Cart;
