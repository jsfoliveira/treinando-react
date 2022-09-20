import React from "react";

const INITIAL_STATE = {
  email: '',
  name: '',
}

export class Form extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = INITIAL_STATE;
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
    console.log(event.target.value);
  }

  validateForm = () => {

    const { name, email } = this.state;
    let formValido = true;
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    if(name.length < 7 && email !== emailRegex) {
      return formValido = false;
    } else {
      this.setState({
        isSaveButtonDisabled: !formValido,
      })
    }
  }


  render() {
    const { email, name, isSaveButtonDisabled } = this.state;
    return (
      <div>
       <h1>Estados e React</h1>
          <form className="form">

            <label htmlFor="name">
              Nome:
              <input
                id="name"
                name="name"
                type="text"
                onChange={ this.handleChange }
                value={ name }
              />
            </label>

            <label htmlFor="email">
              Email:
              <input
                id="email"
                name="email"
                type="email"
                onChange={ this.handleChange }
                value={ email }
              />
            </label>

            <button
            type="submit"
            id="save-button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
          >
            Salvar
          </button>

          </form>
      </div>
    )
  }
}