import React from 'react';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }
  // username = React.createRef();
  handleSubmit = event => {
    // console.log('this.username', this.username.current.value);
    console.log('this.username', this.state.username);
    event.preventDefault();
  };
  render() {
    return (
      <form style={{ marginBottom: '2rem' }} onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          placeholder="enter github username"
          required
          onChange={event => this.setState({ username: event.target.value })}
          // ref={this.username}
        />
        <button>Add Card</button>
      </form>
    );
  }
}
