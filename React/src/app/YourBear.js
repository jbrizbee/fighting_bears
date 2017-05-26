import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class YourBear extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bear: {
        name: '',
        age: '',
        attack: '',
        color: '',
        FavFood: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(propertyName, event) {
    const bear = this.state.bear;
    bear[propertyName] = event.target.value;
    this.setState({ bear: bear});
  }

  handleSubmit(event) {
    // axios.post('http://localhost:4000/api/bears').then(res => {
    //
    // });
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="name" value={this.state.bear.name} onChange={this.handleChange.bind(this, 'name')}/>
        <input type="text" placeholder="age" value={this.state.bear.age} onChange={this.handleChange.bind(this, 'age')}/>
        <input type="text" placeholder="attack" value={this.state.bear.attack} onChange={this.handleChange.bind(this, 'attack')}/>
        <input type="text" placeholder="color" value={this.state.bear.color} onChange={this.handleChange.bind(this, 'color')}/>
        <input type="text" placeholder="Favorite Food" value={this.state.bear.FavFood} onChange={this.handleChange.bind(this, 'FavFood')}/>
        <input type="submit" value="Create Bear!"/>
      </form>
    );
  }
}

export default YourBear;
