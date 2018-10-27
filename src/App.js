import React from 'react'
import BuildChart from './components/BuildChart'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: '',
      weight: 0
    }
  }

  changeHandler = (e) => {
    console.log('trying to change input', e.target.name, e.target.value)
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <div>
        <BuildChart
          height={this.state.height}
          weight={this.state.weight}
          onChange={this.changeHandler}
        />
      </div>
    )
  }
}

export default App
