import { Component } from 'react';
import { Global } from '@emotion/react';

import Routes from 'routes/routes';

import AppLayout from 'components/AppLayout';

import reset from 'styles/reset';

class App extends Component {
  render() {
    return (
      <>
        <AppLayout>
          <Global styles={reset} />
          <Routes />
        </AppLayout>
      </>
    );
  }
}

export default App;
