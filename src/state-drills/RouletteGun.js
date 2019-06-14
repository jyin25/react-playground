import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }

  clickStart = () => {
    this.setState({spinningTheChamber: true})
    setTimeout(() => {
      this.setState({chamber: this.randomNum(9)})
      this.setState({spinningTheChamber: false})
    }, 2000)

  }

  randomNum (max) {
    return Math.floor(Math.random() * Math.floor(max))
  }

  start = () => {
    if (this.state.spinningTheChamber === true) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (this.state.chamber === parseInt(this.props.bulletInChamber)) {
      return 'BANG'
    } else {
      return `you're safe`
    }
  }


  render () {
    return (
      <div>
        <p>
          {this.start()}
        </p>
        <button onClick={this.clickStart}>Start</button>
      </div>
    )
  }
}

export default RouletteGun