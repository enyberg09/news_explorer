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
      submitText="Sign Up"
    >
      <label>
        Email
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        Name
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p className="modal-footer">
        or{" "}
        <button type="button" onClick={switchToLogin}>
          Sign In
        </button>
      </p>
    </ModalWithForm>
  );
}

export default RegisterModal;
