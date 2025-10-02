import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegisterModal({ isOpen, onClose, onRegister, switchToLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password, name });
  }

  return (
    <ModalWithForm
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonText="Sign Up"
    >
      <label className="modal__label">
        Email
        <input className="modal__input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="modal__label">
        Password
        <input className="modal__input" 
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label className="modal__label">
        Name
        <input className="modal__input"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p className="modal__link-option">
        or{" "}
        <span className="modal__link-text" onClick={switchToLogin}>
            Sign In
        </span>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
