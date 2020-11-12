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
          Использование
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
    //const CN = event.target;
    //CN.classList.toggle('open');
    console.log(`popup ${event.target.name}`);
    const TARGET = document.getElementById('popup');
    TARGET.classList.toggle('open');
    //const NAME = event.target.name;
    // if (this.state.usage) {
    //   this.setState({
    //     usage: !this.state.usage
    //   });
    // }
    // if (this.state.devLog) {
    //   this.setState({
    //     devLog: !this.state.devLog
    //   });
    // }
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
    const LIMITS = this.state.limits;
    const OPTIONS = this.options;
    let load;
    let usage;
    let devLog;

    // if (this.state.usage) {
    //   usage = (<Usage onClick={this.popupToggle} />);
    // }
    // if (this.state.devLog) {
    //   devLog = (<DevLog onClick={this.popupToggle} />);
    // }
    usage = (<Usage onClick={this.popupToggle} />);
    devLog = (<DevLog onClick={this.popupToggle} />);

    switch (this.state.load) {
      case 'exercise':
        load = (
          <Exercise
            operator={this.state.operator}
            factor={this.state.factor}
            first={this.state.first}
            second={this.state.second}
            solveToFinish={this.state.solveToFinish}
            handleChanges={this.handleChanges}
            statsUpd={this.statsUpd}
            handleEquasions={this.handleEquasions} />
        )
        break;

      case 'stats':
        load = (
          <Stats
            operator={this.state.operator}
            correct={this.state.correct}
            total={this.state.total}
            handleChanges={this.handleChanges}
            equasions={this.equasions} />
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
