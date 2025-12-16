import React from 'react';

const TableFooter = ({ data }) => {
  const sum = data.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return (
    <tfoot>
      <tr>
        <td colSpan='3'>
          <strong>Suma</strong>
        </td>
        <td>
          <strong>{sum}</strong>
        </td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
