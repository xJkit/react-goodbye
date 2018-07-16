import React, { Fragment, createFactory } from 'react';
import PropTypes from 'prop-types';
import { Prompt as ReactRouterPrompt } from 'react-router';

import GoodByeContext from './GoodByeContext';
import Provider from './GoodByeProvider';
import withGoodBye from './withGoodBye';

const __DEV__ = process.env.NODE_ENV !== 'production';

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
    const { when, children, conditionalPrompt } = this.props;
    return (
      <Fragment>
        <ReactRouterPrompt
          when={when}
          message={location => {
            if (typeof conditionalPrompt === 'undefined' || conditionalPrompt(location) !== true) {
              return '';
            }

            return true;
          }}
        />
        <GoodByeContext.Consumer>
          {renderProps => children({ ...renderProps })}
        </GoodByeContext.Consumer>
      </Fragment>
    );
  }
}

GoodBye.propTypes = {
  when: PropTypes.bool,
  conditionalPrompt: PropTypes.func,
  alertBeforeUnload: PropTypes.bool,
  alertMessage: PropTypes.string,
  children: PropTypes.func.isRequired,
};

GoodBye.defaultProps = {
  when: false,
  alertBeforeUnload: false,
  alertMessage: '' // only work for IE
};

export {
  Provider,
  withGoodBye,
};

export default GoodBye;
