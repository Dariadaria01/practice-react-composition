import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
  state = {
    filesList: [],
  };

  handleFilesUpload = (files) => {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const newFile = {
          id: uuidv4(),
          name: file.name,
          size: file.size,
          content: event.target.result,
        };

        this.setState((prevState) => ({
          filesList: [...prevState.filesList, newFile],
        }));
      };

      reader.readAsText(file);
    });
  };

  render() {
    return (
      <section>
        <File onFilesUpload={this.handleFilesUpload} />
        <List files={this.state.filesList} />
      </section>
    );
  }
}
const root = createRoot(document.querySelector('#root'));
root.render(<App />);
