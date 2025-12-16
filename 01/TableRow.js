import React from 'react';

const TableRow = ({ name, price, quantity }) => {
  const total = price * quantity;

  return (
    <tr>
      <td>{name}</td>
      <td>{price} zł</td>
      <td>{quantity}</td>
      <td>{total} zł</td>
    </tr>
  );
};

export default TableRow;
