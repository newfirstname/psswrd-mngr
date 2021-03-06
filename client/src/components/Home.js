import React from 'react';

import { Panel, PanelGroup } from 'rsuite';

const Home = () => {
  const RegisterUrl = window.location.href + 'register';
  const PasswordsUrl = window.location.href + 'passwords';
  const AddPasswordsUrl = window.location.href + 'add';

  return (
    <div>
      <PanelGroup accordion bordered>
        <Panel header="•  step one" defaultExpanded>
          <p>
            register in <a href={RegisterUrl}>here</a>
          </p>
        </Panel>
        <Panel header="•  step two" defaultExpanded>
          <p>
            see passwords at <a href={PasswordsUrl}>here</a>
          </p>
        </Panel>
        <Panel header="•  step three (optional)" defaultExpanded>
          <p>
            add password at <a href={AddPasswordsUrl}>here</a>
          </p>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Home;
