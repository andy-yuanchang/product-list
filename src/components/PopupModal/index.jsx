import React from 'react';
import './popupModal.css';
import { AiOutlineClose } from 'react-icons/ai'

export default function PopupModal(props) {
  const { renderContent = () => {}, onClose = () => {} } = props;

  return (
    <div id="popup-modal">
      <div className="popup-modal__mask" onClick={onClose} />
      <div className="popup-modal__content">
        {renderContent()}
        <div className="popup-modal__close-button" onClick={onClose}>
          <AiOutlineClose />
        </div>
      </div>
    </div>
  )
}
