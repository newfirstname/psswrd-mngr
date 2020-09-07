import React from 'react';
import { Message } from 'rsuite';
import { Panel, Tooltip } from 'rsuite';

const PasswrodItem = ({ password }) => {
  return (
    <div>
      <Panel header={password.title} bordered>
        {password.username && (
          <>
            <Tooltip visible>username: {password.username}</Tooltip>
          </>
        )}
        {password.email && (
          <>
            <Tooltip visible>email: {password.email}</Tooltip>
          </>
        )}
        <Tooltip visible>password: {password.password}</Tooltip>
        {password.description && (
          <Message type="warning" description={password.description} />
        )}
      </Panel>
    </div>
  );
};

export default PasswrodItem;
