import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
  state = {
    cart: [],
  };

  addToCart = (id) => {
    const product = data.find((item) => item.id === id);

    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };
  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== id),
    }));
  };
  isInCart = (id) => {
    return this.state.cart.some((item) => item.id === id);
  };
  render() {
    const categoryList = data.map((product) => (
      <Product
        key={product.id}
        {...product}
        isCategory={true}
        onAdd={this.addToCart}
        disabled={this.isInCart(product.id)}
      />
    ));
    const cartList = this.state.cart.map((product) => (
      <Product
        key={product.id}
        {...product}
        isCart={true}
        onRemove={this.removeFromCart}
      />
    ));
    return (
      <section>
        <Category>{categoryList}</Category>
        <Cart>{cartList}</Cart>
      </section>
    );
  }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
