import React from 'react';
import Card from './card';

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

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
  }
  // code
  render() {
    return (
      <div>
        {testData.map(profile => (
          <Card {...profile} />
        ))}
      </div>
    );
  }
}
