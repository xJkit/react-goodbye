import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

import GoodByeContext from './GoodByeContext';

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      handleOk: this.handleOk,
      handleCancel: this.handleCancel,
      handlePass: this.handlePass
    };
    this.pass = undefined;

    invariant(
      React.createContext,
      'react-goodbye only support React 16.3+ context api, please upgrade your react to the latest version.'
    )
  }

  handleGetUserConfirm = (message, pass) => {
    this.pass = pass;
    this.setState({ isShow: true });
  };

  handleOk = () => {
    this.pass(true);
    this.setState({ isShow: false });
  };

  handleCancel = () => {
    this.pass(false);
    this.setState({ isShow: false });
  };

  handlePass = bool => {
    this.pass(bool);
    this.setState({ isShow: false });
  }

  render() {
    const { children } = this.props;
    return (
      <GoodByeContext.Provider value={this.state}>
        {children({ handleGetUserConfirm: this.handleGetUserConfirm })}
      </GoodByeContext.Provider>
    );
  }
}

Provider.propTypes = {
  children: PropTypes.func
}

export default Provider;
