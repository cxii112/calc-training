import React from 'react';
import './Stats.css';
class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: undefined,
      operator: props.operator,
      //factor: props.factor ? props.factor : 2,
      //first: props.first ? props.first : 2,
      //second: props.second ? props.second : 1,
      correct: props.correct ? props.correct : 0,
      total: props.total ? props.total : 0,
    }
    this.equasions = this.props.equasions.slice();
    this.handleChanges = this.handleChanges.bind(this);
  }

  equasionsParse() {
    const eq = this.equasions;
    let sym;
    switch (this.state.operator) {
      case 'sum':
        sym = '+'
        break;
      case 'decr':
        sym = '-'
        break;
      case 'mul':
        sym = '*'
        break;
      case 'frac':
        sym = ':'
        break;

      default:
        break;
    }
    const eqList = eq.map((elem, index) =>
      <li key={index}
        className='container'>
        <div className={(elem.answer !== elem.correct) ? 'red content' : 'content'}>
          {elem.first} {sym} {elem.second} = {elem.answer}
        </div>
        <div className={(elem.answer !== elem.correct) ? 'green content' : 'content'}>
          {(elem.answer !== elem.correct) ? ('Правильно: ' + elem.correct) : ''}
        </div>
      </li>
    );
    return (
      <div className='content'>
        {eqList}
      </div>
    )
  }

  handleChanges(event) {
    const NAME = event.target.name;
    const VALUE = event.target.value;
    const TYPE = event.target.type;

    switch (TYPE) {
      case 'range':
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

    this.props.handleChanges(event);
  }

  render() {
    console.log('stats');
    console.log(this.equasions);
    const EQUASIONS = this.equasionsParse();
    return (
      <div className='container'>
        <div className='Stats'>
          <div className='Stats__container'>
            <div className='Stats__content'>
              <div className='content'>
                <div >
                  <div className=''>
                    Верно
              <span className=''>
                      {this.state.correct}
                    </span>
            из
              <span className=''>
                      {this.state.total}
                    </span>
                  </div>
                </div>
              </div>
              <div className=''>
                {EQUASIONS}
              </div>
              <button
                className='content'
                type='button'
                onClick={this.handleChanges}
                name='load'
                value='greet'>
                В начало
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stats;