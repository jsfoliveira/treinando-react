import React from 'react';

export default class nomeSemMap extends React.Component {
  render() {
    const { id, name, email, avatar } = this.props.dados;
    return (
      <div>
        <p> { id } </p>
        <p> { name } </p>
        <p> { email } </p>
        <p> { avatar } </p>
      </div>

    );
  }
}
