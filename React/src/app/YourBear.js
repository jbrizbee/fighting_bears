import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class YourBear extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      attack: "",
      color: "",
      FavFood: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value,
      age: event.target.value,
      attack: event.target.value,
      color: event.target.value,
      FavFood: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
        <input type="text" placeholder="age" value={this.state.age} onChange={this.handleChange}/>
        <input type="text" placeholder="attack" value={this.state.attack} onChange={this.handleChange}/>
        <input type="text" placeholder="color" value={this.state.color} onChange={this.handleChange}/>
        <input type="text" placeholder="Favorite Food" value={this.state.FavFood} onChange={this.handleChange}/>
        <input type="submit" value="submit"/>
      </form>
    );
  }
}

export default YourBear;
