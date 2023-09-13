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
    <div
      // style={item.style}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "4px",
      }}
    >
      <label style={{ color: "lightgray" }}>{item.label}</label>
      {item.type === "select" && (
        <select
          style={{
            background: "transparent",
            border: "none",
            borderBottom: "1px dotted black",
            padding: "0 5px",
            color: "darkgray",
          }}
          name={item.name}
          onChange={handleChange}
          multiple={item.array}
        >
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
