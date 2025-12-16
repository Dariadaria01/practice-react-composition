import React from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);

    return (
      <table border='1' cellPadding='10'>
        <TableHeader />
        <TableBody data={data} />
        <TableFooter data={data} />
      </table>
    );
  }
}

export default Table;
