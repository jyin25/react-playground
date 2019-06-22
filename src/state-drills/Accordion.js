import React, { Component } from 'react'
import './Accordion.css'

export default class Accordion extends Component {
  state = {
    contentIndex: null
  }


  
  clickEvent = (index) => {
    this.setState({
      contentIndex: index
    })
  }


  renderButton = () => {
    
    return this.props.sections.map((section, index) => 
      <li>
        <button onClick={() => this.clickEvent(index)}>{section.title}</button>
        <p>
        {(this.state.contentIndex === index) && this.props.sections[this.state.contentIndex].content}
        </p>
      </li>
      )
  }
  
  render () {
    return (
      <ul> 
        {this.renderButton()}
      </ul>
    )
  }
}