# react-goodbye

> A save reminder component for react router.

[![NPM](https://img.shields.io/npm/v/react-goodbye.svg)](https://www.npmjs.com/package/react-goodbye)

## Install

```bash
npm install --save react-goodbye
```

## Usage

1.  Decorate your router provider from react-router using `withGoodBye`:

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

2.  Import `GoodBye` component under the page you want with save reminder:

```jsx
import React from 'react';
import GoodBye from 'react-goodbye';

class Page extends React.Component {
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
      </div>
    );
  }
}
```

> note: react-goodbye uses React 16.3 new context api under the hood, and therefore only React v16.3+ are supported.

## API Reference

* [withGoodBye](#withGoodBye)
* [Provider](#Provider)
* [GoodBye](#GoodBye)

### withGoodBye

`withGoodBye` uses **higher order component** pattern to inject the **getUserConfirmation** handle function prop on the react-router provider. Use this HoC to decorate the router providers like `BrowserRouter`, `HashRouter` or low-level `Router`:

```jsx
import { withGoodBye } from 'react-goodbye`;
import { Router } from 'react-router';

const EnhancedRouter = withGoodBye(Router);

ReactDom.render(
  <EnhancedRouter>
    <App />
  </EnhancedRouter>
);*
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

`GoodBye` is the consumer component for the GoodBye context. This component must be in the subtree of `Provider` or decorated router provider.

| props | type    | description                                                |
| ----- | ------- | ---------------------------------------------------------- |
| when  | Boolean | make render props `isShow` to be true when routing changes |

**react-goodbye** will handle all of the code logic for you. Use provided `render props` to show whatever you want (modal, lightbox, dialog, popup, etc)

| render props | type     | description                                                                                                               |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| isShow       | Boolean  | while `when` prop is true, `isShow` will be true when routing changes.                                                    |
| handleOk     | function | allow routing changes and make `isShow` to be **false**                                                                   |
| handleCancel | function | block routing changes and make `isShow` to be **false**                                                                   |
| pass         | function | low-level api under `handleOk` and `handleCancel`; pass **true** will allow routing changes, and pass **false** will not. |

## License

MIT © [xJkit](https://github.com/xJkit)