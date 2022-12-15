import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();

  return (
    /* show-modal je dinamicki za vidljivost ,modal-overlay postavlja modal */
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay "
      }`}
    >
      <div className="modal-container">
        <h3>modal container</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
