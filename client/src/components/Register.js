import React, { useState } from 'react';
import axios from 'axios';

import { Form, FormGroup, ControlLabel, HelpBlock, Message } from 'rsuite';

const Register = () => {
  const [alertText, setAlertText] = useState('please enter a passwrod');
  const [alertType, setAlertType] = useState('warning');
  const [showALert, setShowALert] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onUsernameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
    sendData({ ...formData, username: e.target.value });
  };

  const onEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
    sendData({ ...formData, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    setFormData({ ...formData, password: e.target.value });
    sendData({ ...formData, password: e.target.value });
    validatePassword(e.target.value);
  };

  const validatePassword = (pass) => {
    let isValid = false;

    setShowALert(true);

    if (pass.length === 0) {
      setAlertText('please enter a password');
      setAlertType('warning');
    } else {
      if (pass.length < 8) {
        setAlertText('passwrod must be 8 chars');
        setAlertType('warning');
      } else {
        if (pass.match(/^(?=.*[a-zA-Z])(?=.*[0-9])/)) {
          setAlertText('you can see Passwords now');
          setAlertType('info');
          setPasswordIsValid(true);
        } else {
          setAlertText('passwrod must be LETTER and NUMBER');
          setAlertType('warning');
        }
      }
    }

    if (isValid) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(false);
    }
  };

  const sendData = async (data) => {
    axios.post('/api/usernames', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  const showValidationMessage = () => {
    setShowALert(true);
  };

  const onSubmit = (e) => {
    sendData(formData);
    if (passwordIsValid) {
      console.log(formData);
    } else {
      showValidationMessage();
    }
  };

  return (
    <>
      <h3>Register</h3>
      <br />
      <Form onSubmit={onSubmit}>
        {showALert ? (
          <>
            <Message type={alertType} description={alertText} />
            <br />
          </>
        ) : (
          ''
        )}
        <FormGroup>
          <ControlLabel>Username</ControlLabel>
          <input
            className="rs-input"
            value={formData.username}
            name="username"
            onChange={onUsernameChange}
          />
          <HelpBlock>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <input
            className="rs-input"
            name="email"
            value={formData.email}
            onChange={onEmailChange}
          />
          <HelpBlock>Required</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <input
            className="rs-input"
            name="password"
            value={formData.password}
            onChange={onPasswordChange}
          />
        </FormGroup>
        <FormGroup>
          <input className="rs-input" type="submit" value="register" />
        </FormGroup>
      </Form>
    </>
  );
};

export default Register;
