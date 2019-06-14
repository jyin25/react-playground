import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      who: 'world'
    }
  }

  updateWorld = e => {
    const button = e.target.value;
    this.setState({
      who: button
    })
  }

  render () {
    return (
      <div>
        <p>Hello {this.state.who}</p>
        <button onClick={this.updateWorld} value='World'>World</button>
        <button onClick={this.updateWorld} value='Friend'>Friend</button>
        <button onClick={this.updateWorld} value='React'>React</button>
      </div>
    )
  }
}

export default HelloWorld