import React from 'react';
class Wrapper extends React.Component{
  constructor(props) {
    super(props);
    this.state = {clicked:''};
  }
  
  verifyContextByClicked(){
    
  }
  
  
  
  render(){
  return(
    <div>
      {this.state.clicked}
  </div>
  );
}

}
export default Wrapper;
