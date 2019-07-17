import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
class Pessoas extends React.Component {
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
        <h1 className='display-4'>Pessoas</h1>
    );
  }
}

export default Pessoas;