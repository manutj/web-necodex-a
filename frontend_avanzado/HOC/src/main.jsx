import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

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


const MiComponente = ({loading}) => (
<div>
  {loading ? <h1>Loading...</h1> : <h1>Hola Mundo!!</h1>}
</div>
  )

  const MyNewComponentWithLoading = withLoading(MiComponente)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <MyNewComponentWithLoading/> */}
    <App />
  </React.StrictMode>,
)
