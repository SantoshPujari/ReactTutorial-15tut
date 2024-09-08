import React from 'react';
import Button from './Button';

const Form = ({ reqType, setRequestType }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button
        buttonText='users'
        reqType={reqType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText='posts'
        reqType={reqType}
        setRequestType={setRequestType}
      />
      <Button
        buttonText='comments'
        reqType={reqType}
        setRequestType={setRequestType}
      />
    </form>
  );
};

export default Form;
