import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      eaten: [],
      money: 50,
      plates: [],
      displayIndex: 0
    }
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(json => {
      // console.log(json)
      this.setState({
      sushis: json
    })})
  }

  eatSushi = (sushi) => {
    if(this.state.money >= sushi.price) {
      this.addPlate();

      this.setState(prevState => {
        return {
          money: prevState.money - sushi.price,
          eaten: [...prevState.eaten, sushi]
        } 
      })
    }
  }

  addPlate = () => {
    let array = this.state.plates;
    array.push("");
    this.setState({
      plates: array
    })
  }

  chooseFourSushis = () => {
    return this.state.sushis.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  more = (event) => {
    let newDisplayIndex = this.state.displayIndex + 4

    //bonus
    if(newDisplayIndex >= this.state.sushis.length){
      newDisplayIndex = 0
    }

    this.setState({
      displayIndex: newDisplayIndex
    })
  }

  addMoney = (event) => {
    event.preventDefault();
    let add = event.target[0].value;

    this.setState(prevState => {
      return {
        money: prevState.money + parseInt(add)
      }
    })
    event.target[0].value = "";
  }


  render() {
    return (
      <div className="app">
        <form onSubmit={this.addMoney}>Add $ to Budget
          <input type="text" />
          <input type="submit" />
        </form>
        <SushiContainer sushis={this.chooseFourSushis()} callback={this.eatSushi} eaten={this.state.eaten} more={this.more}/>
        <Table money={this.state.money} plates={this.state.plates}/>
      </div>
    );
  }
}

export default App;