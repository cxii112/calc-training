import React from 'react';
import './css/App.css';
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
      operator: 'sum',
      solveToFinish: props.status === 'dev' ? 3 : 10,
      factor: props.factor ? props.factor : 5,
      first: props.first ? props.first : 1,
      second: props.second ? props.second : 1,
      correct: props.correct ? props.correct : 0,
      total: props.total ? props.total : 0,
    }

    this.mins = {
      first: 1,
      second: 1,
      factor: 2,
    }
    this.maxs = {
      first: 3,
      second: 3,
      factor: 9,
    }

    this.equasions = [];

    this.handleEquasions = this.handleEquasions.bind(this);
    this.handleChanges = this.handleChanges.bind(this);
    this.statsUpd = this.statsUpd.bind(this);
    this.popupToggle = this.popupToggle.bind(this);
    //this.statsUpd = this.statsUpd.bind(this);
    this.options = (
      <div className='options'>
        <button
          className='icon-code-solid'
          type='button'
          name='devLog-popup'
          value='true'
          onClick={this.popupToggle}>
          DevLog
        </button>
        <button
          className='icon-info-circle'
          type='button'
          name='usage-popup'
          value='true'
          onClick={this.popupToggle}>
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

  handleEquasions(array) {
    this.equasions = array.slice();
  }

  popupToggle(event) {
    console.log(`popup ${event.target.name}`);
    const NAME = event.target.name;
    const TARGET = document.getElementById(NAME);
    TARGET.classList.toggle('open');
  }

  handleChanges(event) {
    const NAME = event.target.name;
    const TYPE = event.target.type;
    let value = event.target.value;

    switch (TYPE) {
      case 'number':
        switch (NAME) {
          case 'first':
            if (Number(value) > this.maxs.first) {
              value = this.maxs.first;
            }
            break;
          case 'second':
            if (Number(value) > this.maxs.first) {
              value = this.maxs.second;
            }
            break;
          case 'factor':
            if (Number(value) > this.maxs.first) {
              value = this.maxs.factor;
            }
            break;

          default:
            break;
        }
        this.setState({
          [NAME]: Number(value)
        })
        break;

      case 'button':
        switch (NAME) {
          case 'factor':
            switch (value) {
              case 'minus':
                console.log(NAME + ' ' + value);
                if (this.state.factor - 1 >= this.mins.factor) {
                  this.setState({
                    factor: --this.state.factor
                  })
                }
                break;
              case 'plus':
                console.log(NAME + ' ' + value);
                if (this.state.factor + 1 <= this.maxs.factor) {
                  this.setState({
                    factor: ++this.state.factor
                  })
                }
                break;

              default:
                break;
            }
            break;
          case 'first':
            switch (value) {
              case 'minus':
                console.log(NAME + ' ' + value);
                if (this.state.first - 1 >= this.mins.first) {
                  this.setState({
                    first: --this.state.first
                  })
                }
                break;
              case 'plus':
                console.log(NAME + ' ' + value);
                if (this.state.first + 1 <= this.maxs.first) {
                  this.setState({
                    first: ++this.state.first
                  })
                }
                break;

              default:
                break;
            }
            break;
          case 'second':
            switch (value) {
              case 'minus':
                console.log(NAME + ' ' + value);
                if (this.state.second - 1 >= this.mins.second) {
                  this.setState({
                    second: --this.state.second
                  })
                }
                break;
              case 'plus':
                console.log(NAME + ' ' + value);
                if (this.state.second + 1 <= this.maxs.second) {
                  this.setState({
                    second: ++this.state.second
                  })
                }
                break;

              default:
                break;
            }
            break;

          default:
            this.setState({
              [NAME]: value
            });
            break;
        }
        break;

      case 'select-one':
        this.setState({
          [NAME]: value
        })
        break;
      default:
        break;
    };
  }

  render() {
    const OPERATOR = this.state.operator;
    const FIRST = this.state.first;
    const SECOND = this.state.second;
    const FACTOR = this.state.factor;
    const OPTIONS = this.options;
    const LOAD = this.state.load;
    const SOLUTIONS = this.state.solveToFinish;
    const CORRECT = this.state.correct;
    const TOTAL = this.state.total;

    const EQUASIONS = this.equasions;

    const USAGE = (<Usage onClick={this.popupToggle} />);
    const DEVlOG = (<DevLog onClick={this.popupToggle} />);

    const ACTION = (state) => {
      switch (state) {
        case 'exercise':
          return (
            <Exercise
              operator={OPERATOR}
              factor={FACTOR}
              first={FIRST}
              second={SECOND}
              solveToFinish={SOLUTIONS}
              handleChanges={this.handleChanges}
              statsUpd={this.statsUpd}
              handleEquasions={this.handleEquasions} />
          );
        case 'stats':
          return (
            <Stats
              operator={OPERATOR}
              correct={CORRECT}
              total={TOTAL}
              handleChanges={this.handleChanges}
              equasions={EQUASIONS} />
          );

        default:
          return (
            <Greet
              operator={OPERATOR}
              factor={FACTOR}
              first={FIRST}
              second={SECOND}
              handleChanges={this.handleChanges} />
          );
      }
    }

    return (
      <div className='container'>
        {OPTIONS}
        <div className='content'>
          <div className='App'>
            {ACTION(LOAD)}
          </div>
        </div>
        {USAGE}
        {DEVlOG}
      </div>);
  }
}

export default App;
