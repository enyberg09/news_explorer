import React, { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  isOpen,
  onClose,
  title,
  name,
  children,
  onSubmit,
  submitButtonText,
  alternateTextContent,
  isSubmitDisabled = false,
  serverMessage,
}) {

  useEffect(() => {
    const handleEscape = (evt) => {
      if (evt.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);


  const handleOverlayClick = (evt) => {
    if (evt.target.classList.contains("modal__overlay")) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal__overlay ${isOpen ? "modal__overlay_opened" : ""}`}
      onClick={handleOverlayClick}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal__close-btn"
          aria-label="Close"
          onClick={onClose}
        />

        <h2 className="modal__title">{title}</h2>

        <form className="modal__form" name={name} onSubmit={onSubmit}>

          {children}

          {serverMessage && (
            <span className="modal__server-message">{serverMessage}</span>
          )}

          {submitButtonText && (
            <button
              type="submit"
              className="modal__submit-btn"
              disabled={isSubmitDisabled}
            >
              {submitButtonText}
            </button>
          )}

          {alternateTextContent && (
            <p className="modal__link-option">{alternateTextContent}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
