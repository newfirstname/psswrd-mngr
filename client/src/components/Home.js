import React from 'react';

import { Panel, PanelGroup } from 'rsuite';

const Home = () => {
  return (
    <div>
      <PanelGroup accordion bordered>
        <Panel header="step one" defaultExpanded>
          <p></p>
        </Panel>
        <Panel header="step two">
          <p></p>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
