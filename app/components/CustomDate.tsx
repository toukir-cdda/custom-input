import { useFormikContext, ErrorMessage } from "formik";

interface CustomInputProps {
  label: string;
  name: string;
  type: "text" | "date" | "password" | "select" | "radio" | "checkbox";
  options?: { label: string; value: string }[];
  style?: any;
  placeholder?: string;
  item: any;
}

const CustomDate: React.FC<CustomInputProps> = ({ ...item }) => {
  const { handleChange } = useFormikContext();
  // console.log(item);
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
        style={{
          background: "transparent",
          border: "none",
          borderBottom: "1px dotted white",
          padding: "0 5px",
          color: "lightgray",
        }}
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

export default CustomDate;
