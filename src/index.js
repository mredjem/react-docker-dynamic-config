import React from 'react'
import ReactDOM from 'react-dom'
import ConfigService from './config.service'

class Hello extends React.Component {

  constructor (props) {
    super(props)
    this.state = { configuration: {} }
  }

  async componentDidMount () {
    const configuration = await ConfigService.fetchConfig()
    this.setState({ configuration })
  }

  render () {
    return this.state.configuration ?
      React.createElement('h1', null, `Environment: ${this.state.configuration.environment}`) :
      null
  }

}

ReactDOM.render(React.createElement(Hello), document.getElementById('root'))
