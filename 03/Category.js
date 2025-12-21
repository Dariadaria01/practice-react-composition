import React from 'react';

function Category({ children }) {
  return (
    <section>
      <h2>Category</h2>
      {children}
    </section>
  );
}

export default Category;
