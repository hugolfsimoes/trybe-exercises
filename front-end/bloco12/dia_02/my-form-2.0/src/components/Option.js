import React from 'react';
import estados from '../data';

class Option extends React.Component {
  
  render() {
    return(
    <>
     {estados.map(estado => <option value={estado.estado} key={estado.estado}>{estado.estado}</option>)}
    </>
    )
  }
}

export default Option;