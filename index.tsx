import React, { Component } from 'react';
import axios from 'axios';
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
      name: 'React',
      profiles: []
    };
  }
  addUsername = async username => {
    console.log(username, 'is added.');
    const userdata = await axios.get(
      `https://api.github.com/users/${username}`
    );
    console.log(userdata.data);
    this.setState(prestate => ({
      profiles: [...prestate.profiles, userdata.data]
    }));
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
