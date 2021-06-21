import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './card';
import CardList from './cardList';
import CardForm from './card-form';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <h1>Github Cards App</h1>
        <CardForm />
        <CardList />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));