/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */

import './Calculator.css';
import React from 'react';
import calculate from './logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '0' };
    this.obj = {};
  }

  handleButtonClick = (e) => {
    this.obj = calculate(this.obj, e.target.textContent);

    if (this.obj.operation && !this.obj.next) {
      this.setState({ total: this.obj.operation });
    } else if (this.obj.next) {
      this.setState({ total: this.obj.next });
    } else if (this.obj.total) {
      this.setState({ total: this.obj.total });
    } else {
      this.setState({ total: 0 });
    }
  }

  render() {
    const { total } = this.state;
    return (
      <div className="calculator">
        <div className="result">{total}</div>
        <div className="numbers-oberations">
          <button type="button" onClick={this.handleButtonClick}>AC</button>
          <button type="button" onClick={this.handleButtonClick}>+/-</button>
          <button type="button" onClick={this.handleButtonClick}>%</button>
          <button type="button" className="last" onClick={this.handleButtonClick}>&divide;</button>
          <button type="button" onClick={this.handleButtonClick}>7</button>
          <button type="button" onClick={this.handleButtonClick}>8</button>
          <button type="button" onClick={this.handleButtonClick}>9</button>
          <button type="button" className="last" onClick={this.handleButtonClick}>x</button>
          <button type="button" onClick={this.handleButtonClick}>4</button>
          <button type="button" onClick={this.handleButtonClick}>5</button>
          <button type="button" onClick={this.handleButtonClick}>6</button>
          <button type="button" className="last" onClick={this.handleButtonClick}>-</button>
          <button type="button" onClick={this.handleButtonClick}>1</button>
          <button type="button" onClick={this.handleButtonClick}>2</button>
          <button type="button" onClick={this.handleButtonClick}>3</button>
          <button type="button" className="last" onClick={this.handleButtonClick}>+</button>
          <button type="button" className="zero-btn" onClick={this.handleButtonClick}>0</button>
          <button type="button" onClick={this.handleButtonClick}>.</button>
          <button type="button" className="last" onClick={this.handleButtonClick}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
