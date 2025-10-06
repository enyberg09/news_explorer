import { useState } from "react";

export default function useFormValidation(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prev) => ({ ...prev, [name]: value }));

    let errorMsg = "";

    if (name === "email" && !emailPattern.test(value)) {
      errorMsg = "Please enter a valid email.";
    } else if (name === "password" && value.length < 6) {
      errorMsg = "Password must be at least 6 characters.";
    } else if (name === "name" && value.length < 2) {
      errorMsg = "Name must be at least 2 characters.";
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));

    const form = e.target.closest("form");
    setIsValid(form.checkValidity() && !errorMsg);
  }

  function resetForm() {
    setValues(initialValues);
    setErrors({});
    setIsValid(false);
  }

  return { values, errors, isValid, handleChange, resetForm };
}
