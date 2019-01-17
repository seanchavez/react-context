import React from 'react';
import { UserConsumer } from './UserContext';
import { EmailConsumer } from './EmailContext';

const MessageList = () => (
  <UserConsumer>
    {({ user }) => (
      <EmailConsumer>
        {({ loading, emails, onSelectEmail }) => (
          <div className='MessageList'>
            <div className='no-messages'>
              Your mailbox is empty, {user.firstName}! 🎉
            </div>
          </div>
        )}
      </EmailConsumer>
    )}
  </UserConsumer>
);

export default MessageList;
