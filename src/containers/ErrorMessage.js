import React from 'react';

function ErrorMessage(props) {
  const status=props.status;
  // console.log('fafa', status)
  return (
    <div>
      <h1>{status}</h1>
    </div>
  );
};

export default ErrorMessage;