import React from 'react';
import '../css/Exercise.css';
class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: undefined,
      operator: props.operator,
      solveToFinish: props.solveToFinish ? props.solveToFinish : 5,
      current: '',
      autoFocus: false,
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
        this.sym = '−'
        break;
      case 'mul':
        this.sym = '∙'
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
      answer: '',
    }
    this.stats = {
      correct: 0,
      total: 0,
    }

    this.equasions = [];

    this.handleChanges = this.handleChanges.bind(this);
    this.handleAnswer = this.handleAnswer.bind(this);
    this.generateEquasion();
  }

  handleAnswer(event) {
    if (typeof (Number(event.target.value)) === 'number') {
      this.current.answer = Number(event.target.value);
      this.setState({
        [event.target.name]: this.current.answer
      })
    } else {
      this.setState({
        [event.target.name]: ''
      })
    }
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
            this.props.handleEquasions(this.equasions);
            this.props.handleChanges(event);
            break;

          case 'answer':
            if (this.check()) {
              this.setState({
                total: this.stats.total,
                correct: this.stats.correct,
                current: '',
                autoFocus: true,
              });
              this.generateEquasion();
            }

            break;

          default:
            break;
        }


      default:
        break;
    }
  }

  check() {
    if (typeof (this.current.answer) === 'number') {
      if (this.current.answer === this.current.correct) {
        this.stats.correct++;
      }

      this.equasions.push({
        first: this.current.first,
        second: this.current.second,
        answer: this.current.answer,
        correct: this.current.correct
      });

      this.current.answer = '';
      this.stats.total++;
      return true;
    }

    return false;
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
        if ((this.state.second >= 2) || (this.state.first >= 2)) {
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
      const TEXT = (`До завершения ${this.state.solveToFinish - this.stats.total}`);
      finish = (
        <button
          className='content gray'
          type='button'
          name='load'
          value='stats'>{TEXT}</button>
      );
    }
    return (
      <div className='Exercise container'>
        <div className='content'>
          <div className='container'>
            <div>
              <span>{this.current.first}</span>
              <span>{this.sym}</span>
              <span>{this.current.second}</span>
              <span>=</span>
              <input
                type='number'
                pattern='^[0-9]+$'
                name='current'
                placeholder='Ответ'
                value={this.state.current}
                onChange={this.handleAnswer}
                autoFocus={true}
              //onFocusCapture={this.state.autoFocus}
              />
            </div>
          </div>
          <button
            className='content'
            type='button'
            name='answer'
            onClick={this.handleChanges}
          >
            Следующий
          </button>
          {finish}
        </div>
      </div>
    )
  }
}
export default Exercise;