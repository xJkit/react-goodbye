import React from 'react';
import { Prompt as RouterPrompt } from 'react-router';
import { Prompt as RouterDomPrompt } from 'react-router-dom';

/** check react version 16.3+ */
const checkReact = () {
  if (!React.createContext) {
    console.error('No React.createContext was found. Only React v16.3+ and higher versions are supported.');
  }
};

/** check react-router v4 */
const checkReactRouter = () => {
  if (!RouterPrompt && !RouterDomPrompt) {
    console.error('No Prompt component was found. Please assure that you have the latest React Router v4 package and try again.');
  }
};

export default () => {
  checkReact();
  checkReactRouter();
}
