import React from 'react';
import GoodBye from 'react-goodbye';

/** Beautiful Modal and Buttons */
import Modal from '@trendmicro/react-modal';
import { Button } from '@trendmicro/react-buttons';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-modal/dist/react-modal.css';
/** */

/** Custom Common Save Reminder Modal */
export default (props) => (
  <GoodBye {...props}>
    {({ isShow, handleCancel, handleOk }) => isShow && (
        <Modal
          show
          size="xs"
          disableOverlay
          onClose={handleCancel}
        >
          <Modal.Header>
            <Modal.Title>
              <span style={{ fontWeight: 'bold' }}>Custom Save Reminder</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body padding>
            <p>Submit data before you leave. Do you want to continue?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button btnStyle="danger" onClick={handleOk}>Leave</Button>
            <Button onClick={handleCancel}>Stay</Button>
          </Modal.Footer>
        </Modal>
    )}
  </GoodBye>
);
