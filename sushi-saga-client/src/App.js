import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    amount: 100,
    sushis: [],
    x: 0
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(result => this.setState({ sushis: result}))
  }

  subtractFromAmount = price => {
    const newAmount = this.state.amount - price;
    this.setState({amount: newAmount})
  } 

  addMoreSushi = () => {
    if(this.state.x + 4 < this.state.sushis.length){
      const end = this.state.x + 4
      this.setState({ x: end})
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
        sushis={this.state.sushis.slice(this.state.x, this.state.x + 4)} 
        subtractAmount={this.subtractFromAmount} 
        amount={this.state.amount}
        addMoreSushi={this.addMoreSushi}/>
        <Table amount={this.state.amount}/>
      </div>
    );
  }
}

export default App;