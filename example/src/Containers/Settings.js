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
        <GoodBye
          when={isModified}
          alertBeforeUnload
          alertMessage="No! No! No! Save before leave! Do you want to leave? Q.Q" // only work for IE
        >
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
        <div
          style={{
            color: isModified ? 'red' : 'black',
            marginBottom: 24
          }}
        >
          <span>Portfolio Status: </span>
          <select
            value={currentValue}
            onChange={evt => this.setState({ currentValue: evt.target.value })}
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div style={{ color: 'grey' }}>
          <p>change status and do the following:</p>
          <ul className="note">
            <li>change route will popup custom dialogue</li>
            <li>reload or close window will trigger browser alert </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Settings;
