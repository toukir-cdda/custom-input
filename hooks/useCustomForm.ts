import { useState, ChangeEvent, FormEvent } from "react";

interface ValidationRules {
  unique?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  email?: boolean;
  phone?: boolean;
  // Add more custom validation rules as needed
  customMessage?: string;
}

interface FieldRegistration {
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface CustomForm {
  formData: Record<string, string>;
  formErrors: Record<string, string>;
  register: (
    fieldName: string,
    validationRules?: ValidationRules
  ) => FieldRegistration;
  handleSubmit: (e: FormEvent) => void;
}

export function useCustomForm(): CustomForm {
  // State to hold form data
  const [formData, setFormData] = useState<Record<string, string>>({});

  // State to hold form errors
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Function to register a form field and set up validation
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
    };
  };

  // Function to validate a specific form field
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

  // Function to validate an email address
  const isValidEmail = (email: string): boolean => {
    // Implement your email validation logic here
    // For a basic check, you can use a regex pattern
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  // Function to validate a phone number
  const isValidPhoneNumber = (phone: string): boolean => {
    // Implement your phone number validation logic here
    // For a basic check, you can use a regex pattern
    const phoneRegex = /^\d{10}$/; // Change this pattern according to your validation rules
    return phoneRegex.test(phone);
  };

  // Function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Add any final validation logic here if needed

    // Check for form-wide validation errors before submitting
    const hasErrors = Object.keys(formErrors).length > 0;
    if (!hasErrors) {
      // Submit the form
      // You can add your submission logic here
      console.log("Form submitted with data:", formData);
    }
  };

  return {
    formData,
    formErrors,
    register,
    handleSubmit,
  };
}
