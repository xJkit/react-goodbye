import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';

/** react-goodbye */
import { Provider as GoodByeProvider, withGoodBye } from 'react-goodbye';

const EnhancedRouter = withGoodBye(HashRouter);

// HoC
ReactDOM.render(
  <EnhancedRouter>
    <App />
  </EnhancedRouter>,
  document.getElementById('root')
);

