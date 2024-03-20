import React, { Component } from 'react'
import PropsClass from './PropsClass'
class HelloWordClass extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <PropsClass name={this.props.name}/>
    )
  }
}

export default HelloWordClass
