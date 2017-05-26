import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YourBear from './YourBear';

class BearStore extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      bearNames: []
    };
  }

  componentDidMount() {

    axios.get('http://localhost:4000/api/bears').then(res => {
      const bearNameArr = res.data.map(bear =>
        <ul style={{
               'fontFamily': 'HelveticaNeue-UltraLight',
               'padding': '2em',
               'borderRadius': '7px',
               'border': '5px solid darkgray',
               'width': '200px',
               'backgroundColor': `${bear.color}`
             }}>
          <img src="https://image.ibb.co/eSBOyF/bear.png"></img>
          <h2 style={{
            'textTransform': 'uppercase',
            'backgroundColor': 'lightgray',
            'padding': '0.2em'
          }}>{bear.name}</h2>
          <li>{bear.age}</li>
          <li>{bear.attack}</li>
          <li>{bear.color}</li>
          <li>{bear.favFood}</li>
        </ul>
      );

      this.setState({bears: bearNameArr});

    });
  }

  render() {
    console.log(this);
    return (
      <div className="holdingContainer">
      <h1>Fighting Bears!</h1>
      <div style={{
        'display': 'flex'
      }}>{this.state.bears}</div>
      <YourBear />
      </div>
    );
  }
}
export default BearStore;
