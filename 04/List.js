import React from 'react';

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.files.map((file) => (
          <li key={file.id}>
            <strong>{file.name}</strong> ({file.size} bajtów)
            <pre>{file.content}</pre>
          </li>
        ))}
      </ul>
    );
  }
}

export default List;
