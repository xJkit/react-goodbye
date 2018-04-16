import React from 'react';

import Modal from '../components/Modal';
import GoodBye from 'react-goodbye';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: props.initialValue,
      currentValue: props.initialValue
    };
  }

  render() {
    const { initialValue, currentValue } = this.state;
    const isModified = initialValue !== currentValue;
    return (
      <div>
        <GoodBye when={isModified}>
          {({ isShow, handleOk, handleCancel }) =>
            isShow && (
              <Modal>
                <h3>Settings Changed</h3>
                <p>
                  You change the status without saving data. Do you want to
                  leave?
                </p>
                <button style={{ color: 'red' }} onClick={handleOk}>Yes</button>
                <button onClick={handleCancel}>No</button>
              </Modal>
            )
          }
        </GoodBye>
        <h2>Settings Page</h2>
        <div style={{ color: isModified ? 'red' : 'black' }}>
          <span>Portfolio Status: </span>
          <select
            value={currentValue}
            onChange={evt => this.setState({ currentValue: evt.target.value })}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Settings;
