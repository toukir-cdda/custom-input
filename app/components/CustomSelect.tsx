import { useFormikContext, ErrorMessage } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type: "text" | "password" | "select" | "radio" | "checkbox";
  options?: { desc: string; value: string }[];
  style?: any;
  placeholder?: string;
  array?: boolean;
  item: any;
}

const CustomSelect: React.FC<CustomInputProps> = ({
  // label,
  // name,
  // type,
  // options,
  // style,
  // array,
  ...item
}) => {
  const { handleChange } = useFormikContext();

  return (
    <div style={item.style}>
      <label>{item.label}</label>
      {item.type === "select" && (
        <select name={item.name} onChange={handleChange} multiple={item.array}>
          {item.options?.map((option, index) => (
            <option value={option.value} key={index}>
              {option.desc}
            </option>
          ))}
        </select>
      )}

      <ErrorMessage name={item.name} />
    </div>
  );
};

export default CustomSelect;
