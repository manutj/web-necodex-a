
import React, {Component} from "react";
const withLoading = (AlgunComponente) =>{
    class WithLoading extends Component {
      state={
        isLoding: true
      }
  
      componentDidMount(){
        setTimeout(() => {
          this.setState({isLoding: false})
        }, 5000);
      }
  
      render(){
        return(
          <AlgunComponente loading={this.state.isLoding}/>
        )
      }
    }
    return WithLoading 
  }

  export default withLoading