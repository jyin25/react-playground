import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false
    }
  }
  

  clickEvent = (e) => {
     const num = parseInt(this.props.value)
     this.setState({spinningTheChamber: true})
    
    setTimeout(() => {
      let newNum = Math.floor(Math.random() * Math.floor(num+1));
      this.setState({
        chamber: newNum,
        spinningTheChamber: false
      })
    }, 2000)
  }

  renderPage = () => {
    if (this.state.spinningTheChamber === true) {
      return 'spinnng the chamber and pulling the trigger'
    } else if (this.state.chamber === 8) {
      return 'Bang'
    } else {
      return `you're safe`
    }
  }
  
  render () {
    console.log(this.state.spinningTheChamber)
    return (
      
      <div>
        <p>{this.renderPage()}</p>
        <button onClick={this.clickEvent}>Start</button>
      </div>
    )
  }
}

export default RouletteGun