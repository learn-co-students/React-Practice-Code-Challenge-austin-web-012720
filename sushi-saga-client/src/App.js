import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super();
    this.state = {
      sushis: [],
      eatenSushi: [],
      myMoney: 100,
      indexer: 0
    }
  }

  componentDidMount() {
    this.getSushiData()
  }
  getSushiData = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(sushi => this.setState({ sushis: sushi }))
  }
  getFourSushis = () => {
    return this.state.sushis.slice(this.state.indexer, this.state.indexer + 4)
  }

  nextFourSushis = () => {
    this.setState({ indexer: this.state.indexer + 4 })
  }

  eatSushi = (sushi) => {
    console.log(sushi)
    if (this.state.myMoney >= sushi.price) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        myMoney: this.state.myMoney - sushi.price
      })
    }
  }


  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.getFourSushis()}
          moreSushi={this.nextFourSushis}
          eat={this.eatSushi}
          eatenSushi={this.state.eatenSushi}

        />
        <Table cash={this.state.myMoney} emptyPlate={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;