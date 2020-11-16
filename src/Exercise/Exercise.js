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
    const VALUE = event.target.value;
    const REG = /\b0/;
    
      if (REG.test(VALUE) && VALUE.length > 1) {
        this.current.answer = Number(VALUE.replace(/\b0/, ''));
      } else {
        this.current.answer = Number(VALUE);
      }
      this.setState({
        [event.target.name]: this.current.answer
      })
    //  else {
    //   this.setState({
    //     [event.target.name]: ''
    //   })
    //  }
    
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
            if (this.stats.total >= this.state.solveToFinish) {


              this.setState({
                [NAME]: VALUE,
              });
              this.props.statsUpd(this.stats);
              this.props.handleEquasions(this.equasions);
              this.props.handleChanges(event);
            }
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

        //console.log(this.current.correct)
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
    const TOTAL = this.state.total;
    const SOLVE = this.state.solveToFinish;
    const CURRENT = this.state.current;

    const FIRST = this.current.first;
    const SECOND = this.current.second;

    const SYM = this.sym;
    

    const FINISH_BUTTON = () => {
      const CN = (TOTAL >= SOLVE ? 'content' : 'content gray')
      const TEXT = (TOTAL >= SOLVE ?
        'Завершить' : `До завершения ${SOLVE - TOTAL}`)
      return (
        <button
          type='button'
          name='load'
          value='stats'
          className={CN}
          onClick={this.handleChanges}>
          {TEXT}
        </button>
      );
    };
    const NEXT_BUTTON = () => {
      const CN = 'content';
      const TEXT = 'Следующий';
      return (
        <button
          className={CN}
          type='button'
          name='answer'
          onClick={this.handleChanges}>
          {TEXT}
        </button>
      )
    };
    const EQUASION = () => {
      return (
        <div className=''>
          <span>{FIRST}</span>
          <span>{SYM}</span>
          <span>{SECOND}</span>
          <span>=</span>
          <input
            type='number'
            name='current'
            placeholder='Ответ'
            value={CURRENT}
            onChange={this.handleAnswer}
            autoFocus={true}
          />
        </div>
      )
    };
    return (
      <div className='Exercise'>
        <div className='content'>
          <div className='container'>
            {EQUASION()}
            {NEXT_BUTTON()}
            {FINISH_BUTTON()}
          </div>
        </div>
      </div>
    )
  }
}
export default Exercise;