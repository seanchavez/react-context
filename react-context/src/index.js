import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import './index.css';

const Root = () => {
  return (
    <UserProvider>
      <UserConsumer>
        {({ user }) => (user ? <MainPage /> : <LoginPage />)}
      </UserConsumer>
    </UserProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
