import React from "react";
import CustomTextBox from "./CustomTextBox";
import CustomCheckbox from "./CustomCheckbox";
import CustomRadio from "./CustomRadio";
import CustomSelect from "./CustomSelect";
interface CustomInputProps {
  name: string;
  type: "text" | "password" | "checkbox" | "radio" | "select";
  options?: { desc: string; value: any }[];
  label: string;
  style?: any;
  placeholder?: string;
  array?: boolean;
  item: any;
}

const CustomInput: React.FC<CustomInputProps> = ({ ...item }) => {
  switch (item.type) {
    case "password":
      return <CustomTextBox {...item} />;

    case "checkbox":
      return <CustomCheckbox {...item} />;

    case "radio":
      return <CustomRadio {...item} />;
    case "select":
      return <CustomSelect {...item} />;

    default:
      return <CustomTextBox {...item} />;
  }
};

export default CustomInput;
