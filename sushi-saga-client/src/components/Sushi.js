import React, { Component } from "react";

class Sushi extends Component {
  state = {
    eaten: false
  };

  handleClick = () => {
    if(this.props.sushi.price < this.props.amount){
      this.props.subtractAmount(this.props.sushi.price);
      this.setState({ eaten: true });
    } else {
      alert('No monies for sushis')
    }
  };  

  render() {
    return (
      <div className="sushi">
        <div className="plate" onClick={this.handleClick}>
          {this.state.eaten === true ? null : (
            <img
              src={this.props.sushi.img_url}
              width="100%"
              alt={this.props.sushi.name}
            />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
