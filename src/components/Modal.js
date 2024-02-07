import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',//100% якщо потрібно закрити натисканням на будь-яку область поза мадальним вікном
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: isOpen ? 'block' : 'none'
  };

  const contentStyle = {
    position: 'absolute',
    top: 'auto',
    left: '50%',
    transform: 'translate(-50%)',//+-50 % для переміщення мадального вікна по сайті
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px'
  };

  return (
    <div className='modalStyle' style={modalStyle} onClick={onClose}>
      <div style={contentStyle} onClick={(e) => {e.stopPropagation()}}>
        {children}
      </div>
    </div>
  );
};

export default Modal;