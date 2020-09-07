import React from 'react';

import { Panel, PanelGroup } from 'rsuite';

const Home = () => {
  const RegisterUrl = window.location.href + 'register';

  console.log();
  return (
    <div>
      <PanelGroup accordion bordered>
        <Panel header="step one" defaultExpanded>
          <p>
            register in <a href={RegisterUrl}>here</a>
          </p>
        </Panel>
        <Panel header="step two">
          <p></p>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
