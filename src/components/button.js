/* eslint-disable react/prop-types */

import React from 'react';

const Button = (props) => {
  const handleClick = (e) => {
    const { handleButtonClick } = props;
    handleButtonClick(e.target.textContent);
  };

  const { className, buttonName } = props;
  return (
    <button type="button" className={className} onClick={handleClick}>
      {buttonName}
    </button>
  );
};

export { Button as default };
