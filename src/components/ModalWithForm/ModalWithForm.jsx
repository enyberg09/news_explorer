import { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  isOpen,
  onClose,
  onSubmit,
  submitText,
  children,
  isDisabled,
}) {
  // close on Escape key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <h2 className="modal-title">{title}</h2>
        <form className="modal-form" onSubmit={onSubmit}>
          {children}
         <button 
            type="submit" 
            disabled={isDisabled}
            className={`modal__submit ${isDisabled ? 'modal__submit_disabled' : ''}`}
            >
            {submitText}
        </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
