import React from 'react';

class TheDate extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            datetime: new Date()
        }
    }
  render() {
    return <p> {this.state.datetime.toLocaleString()} </p>
  }
}

export default TheDate