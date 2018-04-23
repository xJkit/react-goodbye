import React from 'react';

/** Use Your Own Custom Save Reminder Component */
import SaveReminder from '../components/SaveReminder';

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
        <SaveReminder
          when={initialValue !== currentValue}
          alertBeforeUnload
          alertMessage="No! No! No! Save before leave! Do you want to leave? Q.Q" // only work for IE
        />
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
