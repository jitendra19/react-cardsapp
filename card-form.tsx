import React from 'react';

export default class CardForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ 'margin-bottom': '2rem' }}>
        <input type="text" placeholder="enter github username" />
        <button>Add Card</button>
      </div>
    );
  }
}
