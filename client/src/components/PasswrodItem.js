import React from 'react';

import { Panel } from 'rsuite';

const PasswrodItem = ({ password }) => {
  return (
    <div>
      <Panel header={password.title} bordered>
        {password.password}
      </Panel>
    </div>
  );
};

export default PasswrodItem;
