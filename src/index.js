import React, { Fragment, createFactory } from 'react';
import PropTypes from 'prop-types';
import { Prompt as ReactRouterPrompt } from 'react-router';
import invariant from 'invariant';

const __DEV__ = process.env.NODE_ENV !== 'production';
const GoodByeContext = React.createContext();

export class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
    this.pass = undefined;
    invariant(
      React.createContext,
      'react-goodbye only support React 16.3+ context api, please upgrade your react to the latest version.'
    )
  }

  handleGetUserConfirm = (message, pass) => {
    this.pass = pass;
    this.setState({
      isShow: true
    });
  };

  handleOk = () => {
    this.pass(true);
    this.setState({ isShow: false });
  };

  handleCancel = () => {
    this.pass(false);
    this.setState({ isShow: false });
  };

  render() {
    return (
      <GoodByeContext.Provider
        value={{
          isShow: this.state.isShow,
          handleOk: this.handleOk,
          handleCancel: this.handleCancel,
          pass: this.pass
        }}
      >
        {this.props.children({
          handleGetUserConfirm: this.handleGetUserConfirm
        })}
      </GoodByeContext.Provider>
    );
  }
}

export const withGoodBye = BaseRouterComponent => {
  const factory = createFactory(BaseRouterComponent);
  const WithGoodBye = props => (
    <Provider>
      {({ handleGetUserConfirm }) => (
        factory({
          ...props,
          getUserConfirmation: handleGetUserConfirm
        })
      )}
    </Provider>
  );

  if (__DEV__) {
    const baseRouterName = BaseRouterComponent.displayName || BaseRouterComponent.name || 'Component';
    WithGoodBye.displayName = `withGoodBye(${baseRouterName})`;

    return WithGoodBye;
  }

  return WithGoodBye;
};

class GoodBye extends React.Component {
  handleBeforeUnload = evt => {
    const { alertMessage } = this.props;
    evt.returnValue = alertMessage;
    return alertMessage;
  };

  componentDidUpdate() {
    const { when, alertBeforeUnload } = this.props;
    window.onbeforeunload = when && alertBeforeUnload
      ? this.handleBeforeUnload
      : null;
  }

  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  render() {
    const { when, children } = this.props;
    return (
      <Fragment>
        <ReactRouterPrompt when={when} message="" />
        <GoodByeContext.Consumer>
          {renderProps => children({ ...renderProps })}
        </GoodByeContext.Consumer>
      </Fragment>
    );
  }
}

GoodBye.propTypes = {
  when: PropTypes.bool,
  alertBeforeUnload: PropTypes.bool,
  alertMessage: PropTypes.string,
  children: PropTypes.func.isRequired,
};

GoodBye.defaultProps = {
  when: false,
  alertBeforeUnload: false,
  alertMessage: '' // only work for IE
};

export default GoodBye;
