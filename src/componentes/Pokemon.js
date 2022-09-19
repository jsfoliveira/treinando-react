import React from "react";

export class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div>
        <h1> Pokemon </h1>
        <p> {pokemon.id } </p>
        <p> {pokemon.name } </p>
        <p> {pokemon.averageWeight.value } </p>
        <p> {pokemon.averageWeight.measurementUnit } </p>
        <p> {pokemon.type } </p>
        <p> {pokemon.image } </p>
        <p> {pokemon.moreInfo } </p>
      </div>
    )
  }
}