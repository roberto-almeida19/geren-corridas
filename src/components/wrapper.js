import React from 'react';
import NavBar from './navbar';
import Content from './content';
class Wrapper extends React.Component{
 
constructor(props){
  super(props);
  this.changeStateClicked = this.changeStateClicked.bind(this);
  this.state = {clicked : ''};
}
changeStateClicked(estado){
  this.setState(state => ({clicked: estado}));
}


render(){
  return(
    <div>
    <NavBar changeStateClicked={this.changeStateClicked} />
  
    <Content context={this.state.clicked} />
    </div>
  );
}

}
export default Wrapper;
