import React from 'react';

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      append: 'Start'
    }
  }

  // countdown = () => {
  //   const newCount = this.state.count + 1
  //   let interval = setInterval(() => {
  //   if (this.state.count >= 8) {
  //     this.setState({count: 'BOOM'})
  //   } else if (this.state.count%2 === 0) {
  //     this.setState({count: 'tick'})
  //   } else {
  //     this.setState({count: 'tock'})
  //   }
  //   }, 1000)
  // }

  componentDidMount = () => {
    this.interval = setInterval(() => {
      console.log(this.state.count)
      if ((this.state.count = this.state.count + 1) === 8){
        this.setState({append: 'Bomb'})
      } else if ((this.state.count)%2 === 0) {
        this.setState({append: 'Tock'})
      } else {
        this.setState({append: 'Tick'})
      }
    }, 1000);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <p>
        {this.state.append}
        </p>
        <button onClick={this.componentWillUnmount}>STOP</button>
        <button onClick={this.componentDidMount}>START</button>
      </div>
    )
  }
}

export default Bomb