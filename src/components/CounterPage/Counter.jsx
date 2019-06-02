import React, { Component, PropTypes } from 'react';



const defaultProps = {
  onClick: () => {},
  value: 0
};

class Counter extends Component {
  render() {
    const { onClick, value } = this.props;

    return (
      <div>
        <div className='counter-label'>
          Value: {value}
        </div>
        <button onClick={onClick}>+</button>
      </div>
    );
  }
}


Counter.defaultProps = defaultProps;

export default Counter;
