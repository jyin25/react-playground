import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      who: 'world'
    }
  }

  clickEvent =(e) => {
    this.setState({
      who: e.target.value
    })
  }
  
  
  render () {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.clickEvent} value='Friend'>Friend</button>
        <button onClick={this.clickEvent} value='React'>React</button>
        <button onClick={this.clickEvent} value='World'>World</button>
      </div>
    )
  }
}

export default HelloWorld