import React from 'react';
import { Message } from 'rsuite';

const AddPasswrod = () => {
  const loggedIn = sessionStorage.getItem('loggedIn');

  return loggedIn ? (
    <>
      <Message
        type="warning"
        title="Building..."
        description={
          <p>
            This component is under contructions
            <br />
          </p>
        }
      />
      <Message
        type="warning"
        title="Building..."
        description={
          <p>
            This component is under contructions
            <br />
          </p>
        }
      />
    </>
  ) : (
    <h3>please log in or register</h3>
  );
};

export default AddPasswrod;
