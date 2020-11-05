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
      factor: props.factor ? props.factor : 5,
      first: props.first ? props.first : 1,
      second: props.second ? props.second : 1,
      correct: props.correct ? props.correct : 0,
      total: props.total ? props.total : 0,
    }
    this.handleChanges = this.handleChanges.bind(this);
    this.statsUpd = this.statsUpd.bind(this);
    //this.statsUpd = this.statsUpd.bind(this);
  }

  statsUpd(newStats) {
    this.setState({
      total: newStats.total,
      correct: newStats.correct,
    })
  }

  handleChanges(event) {
    const NAME = event.target.name;
    const VALUE = event.target.value;
    const TYPE = event.target.type;

    switch (TYPE) {
      case 'number':
        this.setState({
          [NAME]: Number(VALUE)
        })
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
  }

  render() {
    const LOAD = this.state.load;
    const OPERATOR = this.state.operator;
    const LIMITS = this.state.limits;
    switch (this.state.load) {
      case 'exercise':
        return (<div className='App'>
          <Exercise
            operator={this.state.operator}
            factor={this.state.factor}
            first={this.state.first}
            second={this.state.second}
            handleChanges={this.handleChanges}
            statsUpd={this.statsUpd}
          />
        </div>);
      case 'stats':
        return (<div className='App'>
          <Stats
            //operator={this.state.operator}
            correct={this.state.correct}
            total={this.state.total}
            handleChanges={this.handleChanges} />
        </div>);
      default:
        return (
          <div className='App'>
            <Greet
              operator={this.state.operator}
              factor={this.state.factor}
              first={this.state.first}
              second={this.state.second}
              handleChanges={this.handleChanges} />
          </div>);
    }
  }
}

export default App;
