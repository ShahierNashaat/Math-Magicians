/* eslint-disable react/prop-types */

import React from 'react';

const Result = (props) => {
  const { output } = props;
  return <div className="result">{output}</div>;
};

export { Result as default };
