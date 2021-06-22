import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
  constructor(props) {
    super(props);
  }
  // code
  render() {
    // const profiles
    return (
      <div>
        {this.props.profiles.map(profile => (
          <Card key={profile.id} {...profile} />
        ))}
      </div>
    );
  }
}
