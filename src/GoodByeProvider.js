import React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

import GoodByeContext from './GoodByeContext';

class Provider extends React.Component {
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

Provider.propTypes = {
  children: PropTypes.func
}

export default Provider;
