import React from 'react';
import api from '../service/api'
import ItemLista from './itemLista'
class Lista extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      lista:[]
    };
  }

  carregarCliente = async () =>{
    const response = await api.get(`/clientes`);
    this.setState({lista: response.data});
    
  };
  carregarMotoristas = async () =>{
    const response = await api.get(`/motoristas`);
    this.setState({lista: response.data});
  };
  verificaLista(){
    if(this.props.clicked === 'Clientes')
      this.carregarCliente()
    else if (this.props.clicked === 'Motoristas') 
      this.carregarMotoristas()
  }
  componentDidUpdate(prevProps, prevState) {
    this.verificaLista();
  }


  render(){
   // this.verificaLista();
    const item = this.state.lista;
    
    
  return(
    <div>
 
     <ItemLista item={item} pessoa={this.props.clicked}/>

        
  </div>
  );
}

}
export default Lista;
