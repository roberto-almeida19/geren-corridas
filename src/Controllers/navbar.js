import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:''};
  }
  
  handleClick(teste){
    
    this.setState(state => ({
      clicked: teste
    }));
    this.props.handleClick(teste);
  }



  render (){
    return(
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav className="mr-1"><Button onClick={(e) => this.handleClick('Clientes',e)}>Clientes</Button></Nav>
      <Nav className="mr-1"><Button onClick={(e) => this.handleClick('Motoristas',e)}>Motoristas</Button></Nav>
      <Nav className="mr-1"><Button onClick={(e) => this.handleClick('Corridas',e)}>Corridas</Button></Nav>
    </Nav>
   </Navbar>
    );
  }
}

export default NavBar;