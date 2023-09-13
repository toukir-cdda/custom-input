import React from "react";
import CustomTextBox from "./CustomTextBox";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadio from "./CustomRadio";
import CustomSelect from "./CustomSelect";
import CustomDate from "./CustomDate";
import CustomEmail from "./CustomEmail";
interface CustomInputProps {
  name: string;
  type:
    | "text"
    | "email"
    | "date"
    | "fieldArray"
    | "password"
    | "checkbox"
    | "radio"
    | "select";
  options?: { desc: string; value: any }[];
  label: string;
  style?: any;
  placeholder?: string;
  array?: boolean;
  item: any;
}

const CustomInput = ({ ...item }) => {
  switch (item.type) {
    case "email":
      return <CustomEmail {...item} />;
    case "password":
      return <CustomTextBox {...item} />;
    case "date":
      return <CustomDate {...item} />;

    case "checkbox":
      return <CustomCheckbox {...item} />;

    case "radio":
      return <CustomRadio {...item} />;
    case "select":
      return <CustomSelect {...item} />;

    case "fieldArray":
      return <div>Owner array</div>;

    default:
      return <CustomTextBox {...item} />;
  }
};

export default CustomInput;
