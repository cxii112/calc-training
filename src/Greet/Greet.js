import React from 'react';
import './Greet.css'

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      operator: props.operator,
      limits: props.limits,
    }
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    const NAME = event.target.name;
    const VALUE = event.target.value;
    const TYPE = event.target.type;

    switch (TYPE) {
      case 'range':
        this.setState({
          limits: {
            [NAME]: { current: VALUE }
          }
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
            <div className='range'>
              <span className='range__title'>
                {this.state.limits.first.title}
              </span>
              <input
                className='range__input'
                type='range'
                name='first'
                min={this.state.limits.first.min}
                max={this.state.limits.first.max}
                //value={this.state.limits.first.current}
                step='1'
                onChange={this.handleChanges} />
            </div>
            <div className='range'>
              <span className='range__title'>
                {this.state.limits.second.title}
              </span>
              <input
                className='range__input'
                type='range'
                name='second'
                min={this.state.limits.second.min}
                max={this.state.limits.second.max}
                //value={this.state.limits.second.current}
                step='1'
                onChange={this.handleChanges} />
            </div>
            <div className='range'>
              <span className='range__title'>
                {this.state.limits.factor.title}
              </span>
              <input
                className='range__input'
                type='range'
                min={this.state.limits.factor.min}
                max={this.state.limits.factor.max}
                //value={this.state.limits.factor.current}
                step='1'
                onChange={this.handleChanges} />
            </div>
          </div>
        )
        break;
      default:
        limitsInput = (
          <div>
            <div className='range'>
              <span className='range__title'>
                {this.state.limits.first.title}
              </span>
              <input
                className='range__input'
                type='range'
                name='first'
                min={this.state.limits.first.min}
                max={this.state.limits.first.max}
                //value={this.state.limits.first.current}
                step='1'
                onChange={this.handleChanges} />
            </div>
            <div className='range'>
              <span className='range__title'>
                {this.state.limits.second.title}
              </span>
              <input
                className='range__input'
                type='range'
                name='second'
                min={this.state.limits.second.min}
                max={this.state.limits.second.max}
                //value={this.state.limits.second.current}
                step='1'
                onChange={this.handleChanges} />
            </div>
          </div>
        )
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
