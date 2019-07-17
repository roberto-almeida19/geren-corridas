import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import Lista from './lista'
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked:''};
  }
  
  changeStateClicked(estado){
    this.setState(state => ({clicked: estado}));
    this.props.changeStateClicked(estado);
  }
  render (){
    const listaDados = this.state.clicked;


    return(
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav className="mr-1"><Button onClick={(e) => this.changeStateClicked('Clientes',e)}>Clientes</Button></Nav>
            <Nav className="mr-1"><Button onClick={(e) => this.changeStateClicked('Motoristas',e)}>Motoristas</Button></Nav>
            <Nav className="mr-1"><Button onClick={(e) => this.changeStateClicked('Corridas',e)}>Corridas</Button></Nav>
        </Nav>
      </Navbar>
      <Lista clicked={listaDados}/>
    </div>
    );
  }
}

export default NavBar;