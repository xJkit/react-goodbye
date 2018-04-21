# react-goodbye

> A save reminder component for react router v4.

[![NPM](https://img.shields.io/npm/v/react-goodbye.svg)](https://www.npmjs.com/package/react-goodbye) [![CircleCI](https://circleci.com/gh/xJkit/react-goodbye/tree/master.svg?style=shield)](https://circleci.com/gh/xJkit/react-goodbye/tree/master) [![Coverage Status](https://coveralls.io/repos/github/xJkit/react-goodbye/badge.svg?branch=master)](https://coveralls.io/github/xJkit/react-goodbye?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/xJkit/react-goodbye/blob/master/LICENSE)

react-goodbye is a save reminder utility to prevent routing transition before you leave without saving changes.

Please check the [demo](https://xJkit.github.io/react-goodbye) page for more information.

## Install

[![NPM](https://nodei.co/npm/react-goodbye.png)](https://nodei.co/npm/react-goodbye/)

```bash
npm install --save react-goodbye
```

or you can use **yarn**:

```bash
yarn add react-goodbye
```

## Usage

* Decorate your router provider from react-router using `withGoodBye`:

```jsx
import { BrowserRouter } from 'react-router-dom';
import { withGoodBye } from 'react-goodbye';

const EnhancedRouter = withGoodBye(BrowserRouter);

ReactDOM.render(
  <EnhancedRouter>
    <App />
  </EnhancedRouter>,
  document.getElementById('root')
);
```

* Import `GoodBye` component under the page you want with save reminder:

```jsx
import React from 'react';
import GoodBye from 'react-goodbye';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialvalue: props.initialValue,
      currentValue: props.initialValue
    };
  }
  render() {
    return (
      <div>
        <GoodBye when={this.state.initialValue !== this.state.currentValue}>
          {({ isShow, handleOk, handleCancel }) =>
            isShow && (
              <Modal>
                <h3>Settings Changed</h3>
                <p>
                  You change the page without saving any data. Do you want to
                  leave?
                </p>
                <button onClick={handleOk}>Yes</button>
                <button onClick={handleCancel}>No</button>
              </Modal>
            )
          }
        </GoodBye>
        <input
          type="input"
          value={this.state.currentValue}
          onChange={evt => this.setState({ currentValue: evt.target.value })}
        />
      </div>
    );
  }
}
```

> note: react-goodbye uses React 16.3 new context api under the hood. Therefore, only React v16.3+ are supported.

## API Reference

* [withGoodBye](#withgoodbye)
* [Provider](#provider)
* [GoodBye](#goodbye)

### withGoodBye

`withGoodBye` uses **higher order component** pattern to inject the **getUserConfirmation** handle function prop on the react-router provider. Use this HoC to decorate the router providers like `BrowserRouter`, `HashRouter` or low-level `Router`:

```jsx
import { withGoodBye } from 'react-goodbye';
import { Router } from 'react-router';

const EnhancedRouter = withGoodBye(Router);

ReactDom.render(
  <EnhancedRouter>
    <App />
  </EnhancedRouter>
);
```

### Provider

If you prefer **render props** pattern, you can use this `Provider` component like so:

```jsx
import { Provider as GoodByeProvider } from 'react-goodbye';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <GoodByeProvider>
    {({ handleGetUserConfirm }) => (
      <BrowserRouter getUserConfirmation={handleGetUserConfirm}>
        <App />
      </BrowserRouter>
    )}
  </GoodByeProvider>
);
```

### GoodBye

`GoodBye` is the consumer component of the GoodBye context. This component must be in the subtree of `Provider` or decorated router provider.

| props             | type    | default | description                                                                                                                                                                                                                     |
|-------------------|---------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| when              | Boolean | false   | Make render props `isShow` to be true or false when routing transition occurs.                                                                                                                                                  |
| alertBeforeUnload | Boolean | false   | Turn on the browser alert. Technically, when you **refresh** or **close** browser window, only browser itself can detect and popup alert for you. If you want to remind the user when doing actions above, turn on this option. |
| alertMessage      | String  | ''      | Custom browser alert messages. Note that this option only works for **IE**.                                                                                                                                                     |

**react-goodbye** will handle all of the code logic for you. Use provided `render props` to show whatever you want (modal, lightbox, dialog, popup, etc)

| render props | type     | default | description                                                                                                                     |
|--------------|----------|---------|---------------------------------------------------------------------------------------------------------------------------------|
| isShow       | Boolean  | false   | While `when` prop is true, `isShow` will be true when routing transition occurs. You can put your dialog component here.        |
| handleOk     | function |         | Allow routing transition and make `isShow` to be **false** again.                                                               |
| handleCancel | function |         | Block routing transition and make `isShow` to be **false** again.                                                               |
| pass         | function |         | Low-level api under `handleOk` and `handleCancel`; pass **true** will allow routing transitions, while pass **false** will not. |

## License

MIT © [xJkit](https://github.com/xJkit)
