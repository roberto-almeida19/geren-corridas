import React from 'react';
import NavBar from './navbar';
import {Row,Col} from 'react-bootstrap';
class MyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {clicked:''};
  }

handleClick(clicked){
  console.log(clicked);
 this.setState({
   clicked
 })
}

  render (){
    
    return(
      <div>
        <NavBar handleClick={this.handleClick}/>
        


      </div>
    );
  }
}

export default MyContainer;