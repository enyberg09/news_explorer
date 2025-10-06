import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import useFormValidation from "../Hooks/useFormValidation.jsx";

function RegisterModal({ isOpen, onClose, onRegister }) {

  const { values, errors, handleChange, isValid } = useFormValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onRegister(values);
    }
  };

  return (
    <ModalWithForm
      title="Register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label>
        Name
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        {values.name && errors.name && <span>{errors.name}</span>}
      </label>

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

export default RegisterModal;
