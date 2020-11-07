import React from 'react';
import './Greet.css'

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: props.operator,
      factor: props.factor ? props.factor : 2,
      first: props.first ? props.first : 2,
      second: props.second ? props.second : 1,
    }
    this.titles = {
      first: '###',
      second: '###',
      factor: 'Множитель',
    }

    this.texts = {
      sum: {
        first: '1-м слагаемом',
        second: '2-м слагаемом',
      },
      decr: {
        first: 'уменьшаемом',
        second: 'вычитаемом',
      },
      mul: {
        first: '1-м множителе',
        second: '2-м множителе',
      },
      frac: {
        first: 'делимом',
        second: 'делителе',
      },
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

    this.handleChanges = this.handleChanges.bind(this);
  }

  changeTitles(operator) {
    console.log('titles ' + operator);
    console.log(this.texts);
    switch (operator) {
      case 'mul':
        this.titles.first = this.texts.mul.first;
        this.titles.second = this.texts.mul.second;
        break;
      case 'frac':
        this.titles.first = this.texts.frac.first;
        this.titles.second = this.texts.frac.second;
        break;
      case 'sum':
        this.titles.first = this.texts.sum.first;
        this.titles.second = this.texts.sum.second;
        break;
      case 'decr':
        this.titles.first = this.texts.decr.first;
        this.titles.second = this.texts.decr.second;
        break;
    }
    console.log(this.titles);
  }

  limitsRender(operator) {
    let result;
    let limitFirst = (
      <div className='number'>
        <span className='number__title'>
          {this.titles.first}
        </span>
        <input
          className='number__input'
          type='number'
          name='first'
          min={this.mins.first}
          max={this.maxs.first}
          value={this.state.first}
          step='1'
          onChange={this.handleChanges} />
      </div>
    );
    let limitSecond = (
      <div className='number'>
        <span className='number__title'>
          {this.titles.second}
        </span>
        <input
          className='number__input'
          type='number'
          name='second'
          min={this.mins.second}
          max={this.maxs.second}
          value={this.state.second}
          step='1'
          onChange={this.handleChanges} />
      </div>
    );
    let limitFactor = (
      <div className='number'>
        <span className='number__title'>
          {this.titles.factor}
        </span>
        <input
          className='number__input'
          type='number'
          name='factor'
          min={this.mins.factor}
          max={this.maxs.factor}
          value={this.state.factor}
          step='1'
          onChange={this.handleChanges} />
      </div>
    );
    switch (operator) {
      case 'mul':
        result = (
          <div className='container gray'>
            <div className=''>
              <div>Число разрядов в</div>
              {limitFirst}
              {limitSecond}
            </div>
            <div className=''>
              {limitFactor}
            </div>
          </div>
        );
        break;

      default:
        result = (
          <div className='container gray'>
            <div className=''>
              <div>Число разрядов в</div>
              {limitFirst}
              {limitSecond}
            </div>
          </div>
        );
        break;
    }

    return (
      result
    )
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
        // this.changeTitles(VALUE);
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
    const OPERATOR = this.state.operator;
    this.changeTitles(OPERATOR);
    //let limitsInput;
    const LIMITS_INPUT = this.limitsRender(OPERATOR);
    

    return (
      <div className='Greet container' >
        <button
          className='content'
          type='button'
          onClick={this.handleChanges}
          name='load'
          value='exercise'>
          Старт
        </button>
        <select
          value={this.state.operator}
          onChange={this.handleChanges}
          name='operator'
          className='content'>
          <option value='sum'>Сложение</option>
          <option value='decr'>Вычитание</option>
          <option value='mul'>Умножение</option>
          <option value='frac'>Деление</option>
        </select>
        {LIMITS_INPUT}
      </div>
    )
  }
}
export default Greet;
