/** @format */

import { ValidateForm } from "../types/types";

export const join_forms: ValidateForm = {
  form_name: "Test Form for Join user",
  form_type: "join",
  db_name: "test",
  collection_name: "test",
  description: "test",
  stepper: true,
  styles: {
    id: "join-form-desktop",
    className: "join-form-desktop",
    desktop: {
      width: "50%",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      gap: "10px",
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
    },
    tablet: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      gap: "10px",
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
    },
    mobile: {
      width: "90%",
      display: "flex",
      flexDirection: "column",
      margin: "0 auto",
      gap: "10px",
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
    },
  },
  join: [
    {
      field_step: ["step-1"],
      type: "text",
      name: "username",
      description: "Please enter username",
      placeholder: "Please enter username",
      label: "First Name",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
      },
      default: "marufhosen",
      validations: [
        {
          type: "unique",
          value: true,
          message: "Value not unique",
        },
        {
          type: "required",
          value: true,
          message: "Value is required",
        },
        {
          type: "minLength",
          value: 3,
          message: "Value is too short",
        },
        {
          type: "maxLength",
          value: 12,
          message: "Value is too long",
        },
      ],
    },
    {
      field_step: ["step-1"],
      type: "date",
      name: "dob",
      description: "Please enter your date of birth",
      placeholder: "Please enter your date of birth",
      label: "Date of birth",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
      },
      default: "",
      validations: [
        {
          type: "required",
          value: true,
          message: "Value is required",
        },
      ],
    },
    {
      field_step: ["step-2"],
      type: "email",
      name: "email",
      description: "Please enter email",
      placeholder: "example@gmail.com",
      label: "Email",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
      },
      default: "",
      validations: [
        {
          type: "required",
          value: true,
          message: "Email is required",
        },
        {
          type: "isEmail",
          value: true,
          message: "Email no valid",
        },
        {
          type: "pattern",
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Pattern not match",
        },
      ],
    },
    {
      field_step: ["step-1"],
      type: "text",
      name: "firstname",
      description: "Please enter firstname",
      placeholder: "Please enter firstname",
      label: "First Name",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
      },
      default: "",
      validations: [
        {
          type: "required",
          value: true,
          message: "Value is required",
        },
        {
          type: "minLength",
          value: 3,
          message: "Value is too short",
        },
        {
          type: "maxLength",
          value: 12,
          message: "Value is too long",
        },
      ],
    },
    {
      field_step: ["step-1"],
      type: "text",
      name: "middlename",
      description: "Please enter middlename",
      placeholder: "Please enter mddlename",
      label: "Middle Name",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
      },
      default: "",
      validations: [],
    },
    {
      field_step: ["step-1"],
      type: "text",
      name: "lastname",
      description: "Please enter lastname",
      placeholder: "Please enter lastname",
      label: "Last Name",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
      },
      default: "",
      validations: [
        {
          type: "required",
          value: true,
          message: "Value is required",
        },
        {
          type: "minLength",
          value: 3,
          message: "Value is too short",
        },
        {
          type: "maxLength",
          value: 12,
          message: "Value is too long",
        },
      ],
    },
    {
      field_step: ["step-1"],
      type: "select",
      array: true,
      name: "role",
      description: "Select Role type",
      placeholder: "",
      label: "Select Role",
      hidden: false,
      pattern: "",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
        options: "horizontal",
      },
      default: "",
      options: [
        {
          value: "admin",
          desc: "Admin",
        },
        {
          value: "user",
          desc: "User",
        },
        {
          value: "super-admin",
          desc: "Super Admin",
        },
      ],
      validations: [
        {
          type: "required",
          value: true,
          message: "Value is required",
        },
      ],
    },
    {
      field_step: ["step-2"],
      type: "radio",
      array: true,
      options: [
        {
          value: "man",
          desc: "Man",
        },
        {
          value: "woman",
          desc: "Woman",
        },
        {
          value: "other",
          desc: "Other",
        },
      ],
      name: "gender",
      description: "Radio field",
      placeholder: "",
      label: "Gender",
      hidden: true,
      pattern: "",
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
        options: "horizontal",
      },
      default: "",
      validations: [
        {
          type: "required",
          message: "Gender is required",
        },
      ],
    },
    {
      field_step: ["step-1", "step-3"],
      type: "password",
      array: false,
      name: "password",
      description: "Password field",
      placeholder: "Enter password",
      label: "Password",
      hidden: true,
      suffix: "",
      prefix: "",
      style: {
        width: 100,
        input_view: "vertical",
      },
      default: "",
      validations: [
        {
          type: "required",
          value: true,
          message: "Value is required",
        },
        {
          type: "pattern",
          value:
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message:
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
        },
      ],
    },
    {
      field_step: ["step-3"],
      type: "fieldArray",
      name: "owner",
      owner: [
        {
          field_step: ["step-3"],
          type: "checkbox",
          array: false,
          typeValue: "array",
          name: "multiselect",
          description: "Checkbox field",
          placeholder: "",
          label: "Checkbox Fields",
          style: {
            width: 100,
            input_view: "vertical",
            options: "horizontal",
          },
          default: [],
          options: [
            {
              value: "home",
              desc: "Home",
            },
            {
              value: "about",
              desc: "About",
            },
            {
              value: "contact",
              desc: "Contract",
            },
          ],
          validations: [
            {
              type: "isArray",
              message: "This must not be empty",
            },
          ],
        },
        {
          type: "text",
          name: "firstname",
          description: "Please enter firstname",
          placeholder: "Please enter firstname",
          label: "First Name",
          suffix: "",
          prefix: "",
          style: {
            width: 100,
            input_view: "vertical",
          },
          default: "Maruf",
          validations: [
            {
              type: "required",
              value: true,
              message: "Value is required",
            },
            {
              type: "minLength",
              value: 3,
              message: "Value is too short",
            },
            {
              type: "maxLength",
              value: 12,
              message: "Value is too long",
            },
          ],
        },
        {
          type: "text",
          name: "middlename",
          description: "Please enter middlename",
          placeholder: "Please enter middlename",
          label: "Middle name",
          suffix: "",
          prefix: "",
          style: {
            width: 100,
            input_view: "vertical",
          },
          default: "",
          validations: [],
        },
        {
          type: "text",
          name: "lastname",
          description: "Please enter lastname",
          placeholder: "Please enter lastname",
          label: "Last Name",
          suffix: "",
          prefix: "",
          style: {
            width: 100,
            input_view: "vertical",
          },
          default: "Islam",
          validations: [
            {
              type: "required",
              value: true,
              message: "Value is required",
            },
            {
              type: "minLength",
              value: 3,
              message: "Value is too short",
            },
            {
              type: "maxLength",
              value: 12,
              message: "Value is too long",
            },
          ],
        },
        {
          type: "text",
          name: "email",
          description: "Please enter email",
          placeholder: "example@gmail.com",
          label: "Email",
          suffix: "",
          prefix: "",
          style: {
            width: 100,
            input_view: "vertical",
          },
          default: "",
          validations: [
            {
              type: "required",
              value: true,
              message: "Value is required",
            },
            {
              type: "isEmail",
              value: true,
              message: "Email no valid",
            },
            {
              type: "pattern",
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Pattern not match",
            },
          ],
        },
        {
          type: "text",
          name: "phone",
          description: "Please enter phone",
          placeholder: "(941)3127460",
          label: "Phone",
          suffix: "",
          prefix: "",
          style: {
            width: 100,
            input_view: "vertical",
          },
          default: "",
          validations: [
            {
              type: "required",
              value: true,
              message: "Value is required",
            },
          ],
        },
      ],
    },
    {
      field_step: ["step-3"],
      type: "checkbox",
      array: false,
      typeValue: "array",
      name: "multiselect",
      description: "Checkbox field",
      placeholder: "",
      label: "Checkbox Fields",
      style: {
        width: 100,
        input_view: "vertical",
        options: "horizontal",
      },
      default: [],
      options: [
        {
          value: "home",
          desc: "Home",
        },
        {
          value: "about",
          desc: "About",
        },
        {
          value: "contact",
          desc: "Contract",
        },
      ],
      validations: [
        {
          type: "isArray",
          message: "This must not be empty",
        },
      ],
    },
    {
      field_step: ["step-3"],
      type: "checkbox",
      array: false,
      typeValue: "boolean",
      name: "terms",
      description: "Checkbox field",
      placeholder: "",
      label: "Terms and Conditions",
      style: {
        width: 100,
        input_view: "vertical",
        options: "horizontal",
      },
      default: false,
      validations: [
        {
          type: "isTrue",
          message: "Accept the terms!",
        },
      ],
    },
  ],
};
