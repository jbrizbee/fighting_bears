import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class BearFight extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bearNames: []
    };
  }

  componentDidMount() {

    axios.get('http://localhost:4000/api/bears').then(res => {
      const bearNameArr = res.data.map(bear => bear.name);

      this.setState({bears: bearNameArr});
    });
  }

  render() {
    return (
      <p>{this.state.bears}</p>
    );
  }
}
ReactDOM.render( < BearFight / > , document.getElementById('container'));
