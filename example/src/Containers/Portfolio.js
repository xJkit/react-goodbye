import React, { Fragment } from 'react';
import { Prompt } from 'react-goodbye';

import Modal from '../components/Modal';
import GoodBye from 'react-goodbye';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: props.initialValue,
      currentValue: props.initialValue
    };
  }

  render() {
    const { initialValue, currentValue } = this.state;
    const isValueModified = initialValue !== currentValue;
    return (
      <div>
        <GoodBye when={isValueModified}>
          {({ isShow, handleOk, handleCancel }) =>
            isShow && (
              <Modal>
                <h3>Portfolio Changed</h3>
                <p>
                  You are leaving without saving data. Do you want to continue?
                </p>
                <button onClick={handleOk}>Leave</button>
                <button onClick={handleCancel}>Stay</button>
              </Modal>
            )
          }
        </GoodBye>
        <h2>Portfolio Page</h2>
        <span>Your Name:</span>
        <span>
          <input
            value={currentValue}
            style={{
              width: '320px',
              borderColor: isValueModified ? 'red' : '#eee',
              lineHeight: '22px',
              outline: 'none',
              border: '1px solid #eee',
              borderRadius: '4px'
            }}
            onChange={evt => this.setState({ currentValue: evt.target.value })}
          />
        </span>
      </div>
    );
  }
}

export default Portfolio;
