import React from 'react';
import Option from './Option';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
    }
  }

  handleChange({target}) {
    console.log(target);
    const {name, type} = target;
    let value = '';
    value = name === 'nome' ? target.value = target.value.toUpperCase() : target.value;
    
    
   this.setState({
     [name]: value,
   })
  }

  render() {

    return(
      <forms>
      <fieldset>
        <label>Nome:
        <input type="text" maxLength="40" name="nome" required onChange={this.handleChange}></input>
        </label>

        <label>Email:
        <input type="text" maxLength="50" name="email" required onChange={this.handleChange}></input>
        </label>

        <label>CPF:
        <input type="text" maxLength="11" name="cpf" required onChange={this.handleChange}></input>
        </label>

        <label>Endereço:
        <input type="text" maxLength="200" name="endereco" required onChange={this.handleChange}></input>
        </label>

        <label>Cidade:
        <input type="text" maxLength="28" name="cidade" required onChange={this.handleChange}></input>
        </label>

        <label>
          <select name="estado" onChange={this.handleChange}>
            <Option />
          </select>
        </label>

        <label>Casa
          <input type="radio" name="type"></input>
        </label>
        <label>Apartamento
          <input type="radio" name="type"></input>
        </label>
       </fieldset>
      </forms>
      
    )
  }
}

export default Forms;