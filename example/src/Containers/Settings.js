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
                <h3>Save Reminder</h3>
                <p>
                  You changed the status without saving any data. Do you want to
                  leave?
                </p>
                <div style={{ textAlign: 'right' }}>
                  <button
                    style={{
                      color: 'white',
                      backgroundColor: 'red',
                      marginRight: '8px',
                      padding: '8px 12px'
                    }} onClick={handleOk}>
                    Leave
                  </button>
                  <button
                    onClick={handleCancel}
                    style={{
                      padding: '8px 12px'
                    }}
                  >
                    Stay
                  </button>
                </div>
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
