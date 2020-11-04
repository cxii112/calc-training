import React from 'react';

class Greet extends React.Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    this.props.handleChanges(event);
  }

  render() {
    return (
      <form className='Greet content'>
        <button
          onClick={this.handleChanges}
          name='load'
          value='exercise'>
          Старт
        </button>
        <select
          onChange={this.handleChanges}
          name='operator'>
          <option value='sum'>Сложение</option>
          <option value='decr'>Вычитание</option>
          <option value='mul'>Умножение</option>
          <option value='frac'>Деление</option>
        </select>
      </form>
    )
  }
}
export default Greet;
