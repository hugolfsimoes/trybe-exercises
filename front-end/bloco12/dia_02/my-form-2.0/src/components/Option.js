import React from 'react';
import estados from '../data';

class Option extends React.Component {
  
  render() {

    const {handleChange} = this.props;
    return(
    <>
     {estados.map(estado => <option value={estado.estado} key={estado.estado}>{estado.estado}</option>)}
    </>
    )
  }
}

export default Option;