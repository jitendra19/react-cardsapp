import React from 'react';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }
  username = React.createRef();
  handleSubmit = event => {
    console.log('this.username', this.username.current.value);
    event.preventDefault();
  };
  render() {
    return (
      <form style={{ marginBottom: '2rem' }} onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="enter github username"
          required
          ref={this.username}
        />
        <button>Add Card</button>
      </form>
    );
  }
}
