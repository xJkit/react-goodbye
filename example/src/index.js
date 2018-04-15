import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

/** react-goodbye */
import { Provider as GoodByeProvider, withGoodBye } from 'react-goodbye';

const EnhancedRouter = withGoodBye(BrowserRouter);

// HoC
ReactDOM.render(
  <EnhancedRouter>
    <App />
  </EnhancedRouter>,
  document.getElementById('root')
);

// render props style
// ReactDOM.render(
//   <GoodByeProvider>
//     {({ handleGetUserConfirm }) => (
//       <BrowserRouter getUserConfirmation={handleGetUserConfirm}>
//         <App />
//       </BrowserRouter>
//     )}
//   </GoodByeProvider>,
//   document.getElementById('root')
// );
