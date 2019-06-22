import React from "react";

class Tabs extends React.Component {
  static defaultProps = {tabs: []};
  state = {
    currentTabIndex: 0
  };

  renderButtons() {
    return this.props.tabs.map((tab, index) => (
      <button onClick = {() => this.handleButtonClick(index)} key={index}>
        {tab.name}
      </button>
    ))
  }

  handleButtonClick = (index) => {
    console.log(index)
    this.setState({currentTabIndex: index})
  }

  renderContent() {
    const currentTab = this.props.tabs[this.state.currentTabIndex]
    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderButtons()}
        {!!this.props.tabs.length && this.renderContent()} 
      </div>
    )
  }
}

export default Tabs;