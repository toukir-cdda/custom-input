import { useFormikContext, ErrorMessage } from "formik";
import { useEffect } from "react";

interface CustomInputProps {
  label: string;
  name: string;
  type: "text" | "date" | "password" | "select" | "radio" | "checkbox";
  options?: { label: string; value: string }[];
  style?: any;
  placeholder?: string;
  item: any;
  default?: string;
}

const CustomTextBox: React.FC<CustomInputProps> = ({ ...item }) => {
  const { values, handleChange, setFieldValue } = useFormikContext();

  return (
    <div
      // style={item.style}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "4px",
      }}
    >
      <label style={{ color: "lightgray" }}>{item.label}</label>
      <input
        // style={{
        //   background: "transparent",
        //   border: "none",
        //   borderBottom: "1px dotted white",
        //   padding: "0 5px",
        //   color: "darkgray",
        // }}
        // type={item.type}
        // name={item.name}
        value={values[item.name]}
        {...item}
        onChange={handleChange}
        // placeholder={item.placeholder}
      />
      <ErrorMessage name={item.name} />
    </div>
  );
};

export default CustomTextBox;