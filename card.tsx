import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const profile = this.props;
    return (
      <div className="githubProfile">
        <img src="profile.avatar_url" />
        <div className="info">
          <h5 className="name">{profile.name}</h5>
          <div className="details">{profile.company}</div>
        </div>
      </div>
    );
  }
}

// export default ({ name }) => <h1>Hello {name}!</h1>;
