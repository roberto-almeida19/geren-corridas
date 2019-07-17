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
  componentDidMount(){
    this.verificaLista();
  }


  render(){
    const item = this.state.lista;
    console.log(item);
    
    
  return(
    <div>
     <ItemLista item={item}/>

        
  </div>
  );
}

}
export default Lista;
