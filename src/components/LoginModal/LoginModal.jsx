import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({ isOpen, onClose, onLogin, switchToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Add this new state

  function handleSubmit(e) {
    e.preventDefault();
    
    // Client-side validation
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    
    setError(""); // Clear any previous errors
    onLogin({ email, password });
  }

  return (
    <ModalWithForm
      title="Sign In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Sign In"
      // Pass the disabled state to ModalWithForm
      isDisabled={!(email && password)}
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
      
      {/* Display error message */}
      {error && <p className="login-modal__error">{error}</p>}
      
      <p className="modal-footer">
        or{" "}
        <button type="button" onClick={switchToRegister}>
          Sign Up
        </button>
      </p>
    </ModalWithForm>
  );
}

export default LoginModal;