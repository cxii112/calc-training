import React from 'react';
import './Stats.css';
class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: undefined,
      //operator: props.operator,
      //factor: props.factor ? props.factor : 2,
      //first: props.first ? props.first : 2,
      //second: props.second ? props.second : 1,
      correct: props.correct ? props.correct : 0,
      total: props.total ? props.total : 0,
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
    return (
      <div className='container'>
        <div className='Stats content'>
          <div >
            <span className=''>
              Верно
          </span>
            <span className=''>
              {this.state.correct}
            </span>
          </div>
          <div className=''>
            <span className=''>
              Всего
          </span>
            <span className=''>
              {this.state.total}
            </span>
          </div>
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
    )
  }
}
export default Stats;