import React from 'react';
import './App.css';
import Greet from './Greet/Greet';
import Exercise from './Exercise/Exercise';
import Stats from './Stats/Stats';
import Usage from './Popups/Usage';
import DevLog from './Popups/DevLog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: props.load ? props.load : 'greet',
      usage: false,
      devLog: false,
      operator: 'mul',
      factor: props.factor ? props.factor : 5,
      first: props.first ? props.first : 1,
      second: props.second ? props.second : 1,
      correct: props.correct ? props.correct : 0,
      total: props.total ? props.total : 0,
    }

    this.handleChanges = this.handleChanges.bind(this);
    this.statsUpd = this.statsUpd.bind(this);
    this.popupToggle = this.popupToggle.bind(this);
    //this.statsUpd = this.statsUpd.bind(this);
    this.options = (
      <div className='options'>
        <button
          type='button'
          name='devLog'
          //value='true'
          onClick={this.handleChanges}>
          DevLog
        </button>
        <button
          type='button'
          name='usage'
          //value='true'
          onClick={this.handleChanges}>
          Помощь
        </button>
      </div>
    );
  }

  statsUpd(newStats) {
    this.setState({
      total: newStats.total,
      correct: newStats.correct,
    })
  }

  popupToggle(event) {
    // const CN = event.currentTarget;
    // CN.classList.toggle('open');
    console.log(`popup ${event.target.name}`)
    const NAME = event.target.name;
    if (this.state.usage) {
      this.setState({
        usage: !this.state.usage
      });
    }
    if (this.state.devLog) {
      this.setState({
        devLog: !this.state.devLog
      });
    }
    // switch (NAME) {
    //   case 'usage':
    //     this.setState({
    //       usage: !this.state.usage
    //     });
    //     break;
    //   case 'devLog':
    //     this.setState({
    //       devLog: !this.state.devLog
    //     });
    //     break;

    //   default:
    //     break;
    //};
  }

  handleChanges(event) {
    const NAME = event.target.name;
    const VALUE = event.target.value;
    const TYPE = event.target.type;
    //console.log(TYPE);

    switch (TYPE) {
      case 'number':
        this.setState({
          [NAME]: Number(VALUE)
        })
        break;

      case 'button':
        switch (NAME) {
          case 'usage':
            this.setState({
              usage: !this.state.usage
            })
            break;
          case 'devLog':
            this.setState({
              devLog: true
            })
            break;
          default:
            this.setState({
              [NAME]: VALUE
            })
            break;
        }
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
    const OPERATOR = this.state.operator;
    const LIMITS = this.state.limits;
    const OPTIONS = this.options;
    let load;
    let usage;
    let devLog;

    if (this.state.usage) {
      usage = (<Usage onClick={this.popupToggle} />);
    }
    if (this.state.devLog) {
      devLog = (<DevLog onClick={this.popupToggle} />);
    }

    switch (this.state.load) {
      case 'exercise':
        load = (
          <Exercise
            operator={this.state.operator}
            factor={this.state.factor}
            first={this.state.first}
            second={this.state.second}
            handleChanges={this.handleChanges}
            statsUpd={this.statsUpd} />
        )
        break;

      case 'stats':
        load = (
          <Stats
            //operator={this.state.operator}
            correct={this.state.correct}
            total={this.state.total}
            handleChanges={this.handleChanges} />
        )
        break;

      default:
        load = (<Greet
          operator={this.state.operator}
          factor={this.state.factor}
          first={this.state.first}
          second={this.state.second}
          handleChanges={this.handleChanges} />)
        break;
    }

    return (
      <div className='container'>
        {/* <div className='options'>
          <button
            type='button'
            name='devLog'
            value='true'
            onClick={this.popupToggle}>
            DevLog
        </button>
          <button
            type='button'
            name='usage'
            value='true'
            onClick={this.popupToggle}>
            Помощь
        </button>
        </div> */}
        {OPTIONS}
        <div className='content'>
          <div className='App'>
            {load}
          </div>
        </div>
        {usage}
        {devLog}
      </div>);
  }
}

export default App;
