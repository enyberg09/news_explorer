import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useFormValidation from "../Hooks/useFormValidation";

function LoginModal({ isOpen, onClose, onLogin }) {
  const { values, errors, handleChange, isValid } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin(values);
    }
  };

  return (
    <ModalWithForm
      title="Login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label>
        Email
        <input
          type="email"
          name="email"
          value={values.email}      
          onChange={handleChange}    
          required
        />
        {values.email && errors.email && <span>{errors.email}</span>} 
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {values.password && errors.password && <span>{errors.password}</span>}
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
