import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
class Corridas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:''};
  }
  
  changeStateClicked(estado){
    console.log(estado);
    this.setState(state => ({clicked: estado}));
    this.props.changeStateClicked(estado);
  }



  render (){
    return(
    <h1>Corridas</h1>
    );
  }
}

export default Corridas;