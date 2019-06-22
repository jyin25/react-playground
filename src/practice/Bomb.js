import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  componentDidMount = () => {
    setInterval(() => {
      this.setState({count: this.state.count + 1})
    }, 1000)
  }

  renderPage = () => {
    if (this.state.count === 8) {
      return 'boom'
    } else if (this.state.count%2 === 0) {
      return 'tick'
    } else {
      return 'tock'
    }
  }

  
  render () {
    console.log(this.state.count)
    return (
      <div>
        <p>{this.renderPage()}</p>
      </div>
    )
  }
}

export default Bomb