import React from 'react';


class User extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> {user.id } </p>
        <p> {user.name } </p>
        <p> {user.email } </p>
        <p> {user.avatar } </p>
      </div>
    )
  }
};
export default User;