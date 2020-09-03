import React from 'react';
import PasswrodItem from './PasswrodItem';

const Passwords = () => {
  const passwords = [
    {
      title: 'telegram 2fa',
      password: '123456',
    },
    {
      title: 'instagram',
      password: '123456',
    },
    {
      title: 'mongodb',
      description: 'all my database passwrods',
      password: '123456',
    },
    {
      title: 'github',
      description: 'all my codes',
      password: '123456',
    },
    {
      title: 'Gmail',
      password: '123456',
    },
    {
      title: 'discord',
      password: '123456',
    },
    {
      title: 'pintrest',
      password: '123456',
    },
  ];

  const loggedIn = sessionStorage.getItem('loggedIn');

  return loggedIn ? (
    passwords.map((pass) => <PasswrodItem password={pass} key={pass.title} />)
  ) : (
    <h3>please log in or register</h3>
  );
};

export default Passwords;
