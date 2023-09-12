import { useFormikContext, ErrorMessage } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type: "text" | "password" | "select" | "radio" | "checkbox";
  options?: { label: string; value: string }[];
  style?: any;
  placeholder?: string;
  item: any;
}

const CustomTextBox: React.FC<CustomInputProps> = ({ ...item }) => {
  const { handleChange } = useFormikContext();
  // console.log(item);
  return (
    <div style={item.style}>
      <label>{item.label}</label>
      <input
        type={item.type}
        name={item.name}
        // value={values[name]}
        // {...item}
        onChange={handleChange}
        placeholder={item.placeholder}
      />
      <ErrorMessage name={item.name} />
    </div>
  );
};

export default CustomTextBox;
