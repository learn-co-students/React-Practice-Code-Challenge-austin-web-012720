import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    money: 100,
    page: 0,
  }

  getMoreSushi = () => {
    const maxPages = this.state.sushi.length / 4;
    const page = this.state.page+1 % maxPages;
    this.setState({page})
  }

  eatSushi = (id) => {
    const newPlate = this.state.sushi.find( sushi => (id === sushi.id));
    const money = this.state.money - newPlate.price;
    if (money < 0)
      return;
    newPlate.eaten = true;
    console.log(newPlate.price);
    // console.log(newPlate);
    const sushi = this.state.sushi;
    // console.log(eaten)
    this.setState({sushi,money})
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushi => this.setState({sushi}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state.sushi.slice(this.state.page*4,this.state.page*4+4)} 
                        handleGetMoreSushi={this.getMoreSushi}
                        handleEatSushi={this.eatSushi}
        />
        <Table money={this.state.money} 
               plates={
                 this.state.sushi
                 .map(sushi => sushi.eaten === true)
                 .filter(val => val)
               } 
        />
      </div>
    );
  }
}

export default App;