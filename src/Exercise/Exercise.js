import React from 'react';
import './Exercise.css';
class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: undefined,
      operator: props.operator,
      solveToFinish:  props.solveToFinish ? props.solveToFinish : 5,
      factor: props.factor ? props.factor : 2,
      first: props.first ? props.first : 2,
      second: props.second ? props.second : 1,
      correct: props.correct ? props.correct : 0,
      total: props.total ? props.total : 0,
    }

    this.sym = '';
    switch (this.state.operator) {
      case 'sum':
        this.sym = '+'
        break;
      case 'decr':
        this.sym = '-'
        break;
      case 'mul':
        this.sym = '*'
        break;
      case 'frac':
        this.sym = ':'
        break;

      default:
        break;
    }

    this.current = {
      first: 0,
      second: 0,
      correct: 0,
    }
    this.stats = {
      correct: 0,
      total: 0,
    }

    this.handleChanges = this.handleChanges.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.generateEquasion();
  }

  handleAnswer(event) {
    this.current.answer = Number(event.target.value);
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
        switch (NAME) {
          case 'load':
            this.setState({
              [NAME]: VALUE,
            });
            this.props.statsUpd(this.stats);
            this.props.handleChanges(event);
            break;

          case 'answer':
            this.check();
            this.setState({
              total: this.stats.total,
              correct: this.stats.correct,
            });
            this.generateEquasion();
            break;

          default:
            break;
        }


      default:
        break;
    }
  }

  check() {
    if (this.current.answer === this.current.correct) {
      this.stats.correct++;
    }
    this.stats.total++;
  }

  generateEquasion() {
    switch (this.state.operator) {
      case 'sum':
        this.current.first =
          Math.floor(Math.random() * (Math.pow(10, this.state.first)));
        this.current.second =
          Math.floor(Math.random() * (Math.pow(10, this.state.second)));
        this.current.correct = this.current.first + this.current.second;
        break;
      case 'decr':
        this.current.first =
          Math.floor(Math.random() * (Math.pow(10, this.state.first)));
        this.current.second =
          Math.floor(Math.random() * (Math.pow(10, this.state.second)));
        if (this.current.first < this.current.second) {
          let temp = this.current.first;
          this.current.first = this.current.second;
          this.current.second = temp;
        }
        this.current.correct = this.current.first - this.current.second;
        break;
      case 'mul':
        if (this.state.second >= 2) {
          this.current.first =
            Math.floor(Math.random() * (Math.pow(10, this.state.first)));
          this.current.second =
            Math.floor(Math.random() * (Math.pow(10, this.state.second)));
          this.current.correct = this.current.first * this.current.second;
        } else {
          this.current.first =
            Math.floor(Math.random() * (Math.pow(10, 1)));
          this.current.second = this.state.factor;
          this.current.correct = this.current.first * this.current.second;
        }

        console.log(this.current.correct)
        break;
      case 'frac':
        do {
          this.current.first =
            Math.floor(Math.random() * (Math.pow(10, this.state.first)));
          this.current.second =
            Math.floor(Math.random() * (Math.pow(10, this.state.second)));
          if (this.current.first < this.current.second) {
            let temp = this.current.first;
            this.current.first = this.current.second;
            this.current.second = temp;
          }
          if (this.current.second === 0) { this.current.second++ }
        } while (!(this.current.first % this.current.second === 0));
        this.current.correct = this.current.first / this.current.second;
        break;
    }
    console.log(this.current.first + this.sym
      + this.current.second + '='
      + this.current.correct);
  }


  render() {
    let finish;
    ;
    if (this.state.total >= this.state.solveToFinish) {
      finish = (
        <button
          className='content'
          type='button'
          onClick={this.handleChanges}
          name='load'
          value='stats'>
          Завершить
        </button>
      );
    } else {
      finish = (
        <button
          className='content gray'
          type='button'
          name='load'
          value='stats'>
          {this.stats.total + 1} из {this.state.solveToFinish}
        </button>
      );
    }
    return (
      <div className='container'>
        <div className='content'>
          <span>{this.current.first}</span>
          <span>{this.sym}</span>
          <span>{this.current.second}</span>
          <span>=</span>
          <input
            type='number'
            name='current'
            min='0'
            placeholder='Ответ'
            onChange={this.handleAnswer}
          />
          <button
            className='content'
            type='button'
            name='answer'
            onClick={this.handleChanges}
          >
            Следующий
        </button>
        </div>
        {finish}
      </div>
    )
  }
}
export default Exercise;