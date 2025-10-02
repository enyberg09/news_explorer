import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({ isOpen, onClose, onLogin, switchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError(""); 
    onLogin({ email, password });
  }

  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitButtonText="Sign In"
      isSubmitDisabled={!(email && password)}
      alternateTextContent={
        <>
          or{" "}
          <span className="modal__link-text" onClick={switchToRegister}>
            Sign up
          </span>
        </>
      }
    >
      <label className="modal__label">
        Email
        <input
          className="modal__input"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="modal__label">
        Password
        <input
          className="modal__input"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      {error && (
        <p className="modal__error-message modal__error-message_visible">
          {error}
        </p>
      )}
    </ModalWithForm>
  );
}

export default LoginModal;
