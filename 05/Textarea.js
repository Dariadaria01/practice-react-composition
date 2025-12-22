import React from 'react';

class Textarea extends React.Component {
  textareaRef = React.createRef();

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.content !== this.props.content) {
      const textarea = this.textareaRef.current;

      if (textarea.offsetHeight < textarea.scrollHeight) {
        return { resize: true };
      }
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot?.resize) {
      const textarea = this.textareaRef.current;

      const newHeight = Math.min(textarea.scrollHeight, 100);
      textarea.style.height = `${newHeight}px`;
    }
  }

  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <textarea
        ref={this.textareaRef}
        value={this.props.content}
        onChange={this.handleChange}
        style={{
          resize: 'none',
          overflow: 'hidden',
          height: '40px',
        }}
      />
    );
  }
}

export default Textarea;
