/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */

import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(e) {
    const { handleButtonClick } = this.props;
    handleButtonClick(e.target.textContent);
  }

  render() {
    const { className, buttonName } = this.props;
    return <button type="button" className={className} onClick={this.handleButtonClick}>{buttonName}</button>;
  }
}

export default Button;
