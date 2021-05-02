import React from 'react';
import Option from './Option';

class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);

    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      cargo: '',
    }
  }

  handleChange({target}) {
    const {name,  options, selectedIndex} = target;
    let value = '';
    value = name === 'nome' ? target.value = target.value.toUpperCase() : target.value;
    value = name === 'estado' ? options[selectedIndex].value : value;
    value = name === 'tipo' ? target.value : value;
    
   this.setState({
     [name]: value,
   })
  }

  handleBlur({target}) {
    const cidade = this.state.cidade
    let value = cidade[0] === '0'|| cidade[0] ==='1'|| cidade[0] ==='2'|| cidade[0] ==='3'|| cidade[0] ==='4'|| cidade[0] ==='5'|| cidade[0] ==='6'|| cidade[0] ==='7'|| cidade[0] ==='8'|| cidade[0] ==='9' ? target.value = '' : cidade;


    this.setState({
      cidade: value,
    })
  }

  handleMouseEnter () {
    const inputCargo = document.querySelector('.input-cargo');
    alert('Preencha com cuidado esta informação.');
    inputCargo.removeEventListener('mouseenter', this.handleMouseEnter);
  }

  handleClick () {
    
  }

  render() {

    return(
      <forms>
      <fieldset className="fieldset-informacoes">
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
        <input type="text" maxLength="28" name="cidade" required onChange={this.handleChange} onBlur={this.handleBlur}></input>
        </label>

        <label>
          <select name="estado" onChange={this.handleChange}>
            <Option />
          </select>
        </label>

        <label>Casa
          <input type="radio" name="tipo"  className="radio-btn" value="Casa" onChange={this.handleChange}></input>
        </label>
        <label>Apartamento
          <input type="radio" name="tipo"  className="radio-btn" value="Apartamento" onChange={this.handleChange}></input>
        </label>
       </fieldset>

       <fieldset className="fieldset-emprego"> 
       <label> Resumo do Currículo
         <textarea maxLength="1000" required></textarea>
       </label>

       <label> Cargo
         <textarea maxLength="40" required className="input-cargo" name="cargo"  onMouseEnter={this.handleMouseEnter}></textarea>
       </label>

       <label> Descrição do Cargo
         <input type="text
         " maxLength="500" required></input>
       </label>

       </fieldset>

        <button className="btn-enviar" onClick={this.handleClick}>Enviar</button>
      </forms>
      
    )
  }
}

export default Forms;