import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((product) => (
        <TableRow
          key={product.id}
          name={product.name}
          price={product.price}
          quantity={product.quantity}
        />
      ))}
    </tbody>
  );
};

export default TableBody;
