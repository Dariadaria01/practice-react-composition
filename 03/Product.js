import React from 'react';

function Product({
  id,
  name,
  price,
  isCategory,
  isCart,
  onAdd,
  onRemove,
  disabled,
}) {
  return (
    <div style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
      <h4>{name}</h4>
      <p>Cena: {price} zł</p>

      {isCategory && (
        <button onClick={() => onAdd(id)} disabled={disabled}>
          Dodaj do koszyka
        </button>
      )}

      {isCart && <button onClick={() => onRemove(id)}>Usuń z koszyka</button>}
    </div>
  );
}

export default Product;
