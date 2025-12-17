import React from 'react';

import ListItem from './ListItem';

function List(props) {
  return (
    <ul>
      {props.items.map((user, index) => (
        <ListItem key={index} user={user} />
      ))}
    </ul>
  );
}

export default List;
