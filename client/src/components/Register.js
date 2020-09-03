import React, { useState } from 'react';
import axios from 'axios';

import {
  Form,
  FormGroup,
  ControlLabel,
  HelpBlock,
  ButtonToolbar,
  Button,
} from 'rsuite';

const Register = () => {
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
  };

  const sendData = async (data) => {
    console.log(data);
    axios.post('/api/usernames', formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return (
    <>
      <h3>Register</h3>
      <br />
      <Form>
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
          <ButtonToolbar>
            <Button appearance="primary">Register</Button>
          </ButtonToolbar>
        </FormGroup>
      </Form>
    </>
  );
};

export default Register;
