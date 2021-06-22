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

const testData = [
  {
    name: 'Dan Abramov',
    avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
    company: '@facebook'
  },
  {
    name: 'Sophie Alpert',
    avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
    company: 'Humu'
  },
  {
    name: 'Sebastian Markbåge',
    avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
    company: 'Facebook'
  }
];

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      profiles: testData
    };
  }
  addUsername = username => {
    console.log(username, 'is added.');
  };
  render() {
    return (
      <div>
        <h1>Github Cards App</h1>
        <CardForm addUsername={this.addUsername} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
