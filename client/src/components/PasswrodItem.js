import React from 'react';
import { Message } from 'rsuite';
import { Panel } from 'rsuite';

const PasswrodItem = ({ password }) => {
  return (
    <div>
      <Panel header={password.title} bordered>
        {password.description && (
          <Message type="warning" description={password.description} />
        )}
        <Message description={password.password} />
      </Panel>
    </div>
  );
};

export default PasswrodItem;
