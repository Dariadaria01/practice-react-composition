import React from 'react';

class File extends React.Component {
  handleChange = (event) => {
    const files = event.target.files;
    this.props.onFilesUpload(files);
  };
  render() {
    return <input type='file' multiple onChange={this.handleChange} />;
  }
}

export default File;
