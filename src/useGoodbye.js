import React from 'react';
import PropTypes from 'prop-types';
import GoodByeContext from './GoodByeContext';
import * as Router from 'react-router'

export default function useGoodBye({ when, conditionalPrompt, alertBeforeUnload, alertMessage }) {
  const goodbye = React.useContext(GoodByeContext);

  const handleBeforeUnload = evt => {
    evt.returnValue = alertMessage;
    return alertMessage;
  };

  React.useEffect(() => {
    if (when && alertBeforeUnload) {
      window.onbeforeunload = handleBeforeUnload
    }
    return () => {
      window.onbeforeunload = null;
    }
  }, [when, alertBeforeUnload]);

  usePrompt(when, (location) => {
    if (typeof conditionalPrompt === 'function' && conditionalPrompt(location) !== false) {
      return ''
    }
    return true
  })

  return goodbye
}

function usePrompt(when, message) {
  const { history } = React.useContext(Router.__RouterContext);

  React.useEffect(() => {
    if (when && !context.staticContext) {
      return history.block(message)
    }
  }, [when, message])
}

useGoodBye.propTypes = {
  when: PropTypes.bool,
  conditionalPrompt: PropTypes.func,
  alertBeforeUnload: PropTypes.bool,
  alertMessage: PropTypes.string,
}
