import React from 'react';

class Form extends React.Component {
  nameRef = React.createRef();
  surnameRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    const name = this.nameRef.current.value;
    const surname = this.surnameRef.current.value;

    if (name && surname) {
      this.props.addUser(`${name} ${surname}`);
    }
    this.nameRef.current.value = '';
    this.surnameRef.current.value = '';
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.nameRef} placeholder='Imię' />
        <input ref={this.surnameRef} placeholder='Nazwisko' />
        <input type='submit' value='Dodaj' />
      </form>
    );
  }
}

export default Form;
