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
      first: '1 элемент',
      second: '2 элемент',
      factor: 'Множитель',
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
    this.props.handleChanges(event);
  }

  render() {
    let limitsInput;
    switch (this.state.operator) {
      case 'mul':
        limitsInput = (
          <div>
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
          </div>
        );
        break;
      default:
        limitsInput = (
          <div>
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
          </div>
        );
        break;
    }

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
        {limitsInput}
      </div>
    )
  }
}
export default Greet;
