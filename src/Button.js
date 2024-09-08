import React from 'react';

const Button = ({ buttonText, reqType, setRequestType }) => {
  return (
    <button
      className={buttonText === reqType ? 'selected' : null}
      type='button'
      onClick={() => setRequestType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

export default Button;
