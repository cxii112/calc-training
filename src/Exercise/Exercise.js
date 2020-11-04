import React from 'react';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.handleChanges = this.handleChanges.bind(this);
  }

  render() {
    return (
      <div>
        Exercise
      </div>
    )
  }
}
export default Exercise;