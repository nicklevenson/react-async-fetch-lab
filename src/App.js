// create your App component here
import React from 'react'

export default class App extends React.Component {
  state = {
    astros: []
  }
  componentDidMount() {
    fetch(`http://api.open-notify.org/astros.json`)
    .then(resp => resp.json())
    .then(json => this.setState({astros: json.people}))
  }

  
  render() {
    return(
      <div>
        <h2>Here are some Astronautsin space right now.</h2>
        <ul>
          {this.state.astros.map(a => <li>{a.name} is in {a.craft}</li>)}
        </ul>
      </div>
    )
  }
}