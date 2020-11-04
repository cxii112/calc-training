import React from 'react';
import './App.css';
import Greet from './Greet/Greet';
import Exercise from './Exercise/Exercise';
import Stats from './Stats/Stats';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: props.load ? props.load : 'greet',
      operator: 'sum',
      limits: {
        first: 1,
        second: 1,
        factor: 5,
      }
    }
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    const NAME = event.target.name;
    const VALUE = event.target.value;

    switch (NAME) {
      case 'load':
        this.setState({
          load: VALUE
        })
        break;

      case 'operator':
        this.setState({
          operator: VALUE
        })
        break;
    }
  }

  render() {
    switch (this.load) {
      case 'excersise':
        return (<Exercise />);
      case 'stats':
        return (<Stats />);
      default:
        return (<Greet handleChanges={this.handleChanges} />);
    }
  }
}

export default App;
