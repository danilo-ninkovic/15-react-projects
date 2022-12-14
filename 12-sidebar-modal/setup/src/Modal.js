import React from "react";
import { FaTimes } from "react-icons/fa";
const Modal = () => {
  return (
    /* show-modal je dinamicki za vidljivost ,modal-overlay postavlja modal */
    <div className={`modal-overlay `}>
      <div className="modal-container">
        <h3>modal container</h3>
        <button className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
