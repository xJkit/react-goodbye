import React from 'react';

import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

const Modal = ({ children, ...restProps }) => {
  return (
    <ReactModal
      {...restProps}
      isOpen
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
