/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */

import React from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { output } = this.props;
    return <div className="result">{output}</div>;
  }
}

export default Result;
