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
      operator: 'mul',
      limits: {
        first: {
          title: '1 элемент',
          min: 1,
          max: 3,
          current: 2,
        },
        second: {
          title: '2 элемент',
          min: 1,
          max: 3,
          current: 1,
        },
        factor: {
          title: 'Множитель',
          min: 1,
          max: 9,
          current: 5,
        },
      }
    }
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    const NAME = event.target.name;
    const VALUE = event.target.value;
    const TYPE = event.target.type;

    switch (TYPE) {
      case 'range':
        switch (NAME) {
          case 'first':
            this.setState({
              limits: {
                first: { current: VALUE }
              }
            });
            break;
          case 'second':
            this.setState({
              limits: {
                second: { current: VALUE }
              }
            });
            break;
          case 'factor':
            this.setState({
              limits: {
                factor: { current: VALUE }
              }
            });
            break;
        }
        break;

      case 'button':
        this.setState({
          [NAME]: VALUE
        })
        break;

      case 'select-one':
        this.setState({
          [NAME]: VALUE
        })
        break;
      default:
        break;
    }

    // console.log('App state:')
    // console.log(`load ${this.state.load}`);
    // console.log(`operator ${this.state.operator}`);
    // console.log(`limits: ${this.state.limits.first} ${this.state.limits.second} ${this.state.limits.factor}`);
  }

  render() {
    const LOAD = this.state.load;
    const OPERATOR = this.state.operator;
    const LIMITS = this.state.limits;
    switch (LOAD) {
      case 'exercise':
        return (<div className='App'>
          <Exercise />
        </div>);
      case 'stats':
        return (<div className='App'>
          <Stats />
        </div>);
      default:
        return (
          <div className='App'>
            <Greet
              operator={OPERATOR}
              limits={LIMITS}
              handleChanges={this.handleChanges} />
          </div>);
    }
  }
}

export default App;
