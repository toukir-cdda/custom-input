import { useState, ChangeEvent, FormEvent } from "react";

interface ValidationRules {
  unique?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  email?: boolean;
  phone?: boolean;
  customMessage?: string;
}

interface FieldRegistration {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  touched: boolean;
}

interface CustomForm {
  formData: Record<string, string>;
  formErrors: Record<string, string>;
  touchedFields: Record<string, boolean>;
  register: (
    fieldName: string,
    validationRules?: ValidationRules
  ) => FieldRegistration;
  handleSubmit: (e: FormEvent) => void;
}

export function useCustomForm(): CustomForm {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {}
  );

  const register = (
    fieldName: string,
    validationRules: ValidationRules = {}
  ): FieldRegistration => {
    return {
      name: fieldName,
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value, validationRules);
      },
      onBlur: () => {
        setTouchedFields({ ...touchedFields, [fieldName]: true });
        validateAllFields();
      },
      touched: !!touchedFields[fieldName],
    };
  };

  const validateField = (
    fieldName: string,
    value: string,
    validationRules: ValidationRules
  ) => {
    const errors: Record<string, string> = {};

    if (validationRules.required && !value) {
      errors[fieldName] =
        validationRules.customMessage || "This field is required.";
    }

    if (validationRules.minLength && value.length < validationRules.minLength) {
      errors[fieldName] =
        validationRules.customMessage ||
        `Value is too short (minimum ${validationRules.minLength} characters).`;
    }

    if (validationRules.maxLength && value.length > validationRules.maxLength) {
      errors[fieldName] =
        validationRules.customMessage ||
        `Value is too long (maximum ${validationRules.maxLength} characters).`;
    }

    if (validationRules.email && !isValidEmail(value)) {
      errors[fieldName] =
        validationRules.customMessage || "Invalid email format.";
    }

    if (validationRules.phone && !isValidPhoneNumber(value)) {
      errors[fieldName] =
        validationRules.customMessage || "Invalid phone number format.";
    }

    setFormErrors({ ...formErrors, ...errors });
  };

  const validateAllFields = () => {
    // Validate all fields when onBlur is triggered
    Object.keys(formData).forEach((fieldName) => {
      const value = formData[fieldName];
      const validationRules = {}; // Define your validation rules here for each field
      validateField(fieldName, value, validationRules);
    });
  };

  const isValidEmail = (email: string): boolean => {
    // Implement your email validation logic here
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone: string): boolean => {
    // Implement your phone number validation logic here
    const phoneRegex = /^\d{10}$/; // Change this pattern according to your validation rules
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    validateAllFields();

    // Check for form-wide validation errors before submitting
    const hasErrors = Object.keys(formErrors).length > 0;
    if (!hasErrors) {
      // Submit the form
      // You can add your submission logic here
      console.log(formData);
    }
  };

  return {
    formData,
    formErrors,
    touchedFields,
    register,
    handleSubmit,
  };
}
