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

const CustomRadio: React.FC<CustomInputProps> = ({
  // label,
  // name,
  // type,
  // options,
  // style,
  // array,
  ...item
}) => {
  const { values, handleChange } = useFormikContext();

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
      {item.type === "radio" && (
        <>
          {item.options?.map((option, index) => (
            <label
              key={index}
              style={{ display: "flex", gap: "3px", color: "darkgray" }}
            >
              <input
                type={item.type}
                name={item.name}
                value={option.value}
                onChange={handleChange}
              />
              <span>{option.desc}</span>
            </label>
          ))}
        </>
      )}

      <ErrorMessage
        name={item.name}
        component="div"
        className="text-red-500 text-xs py-1 "
      />
    </div>
  );
};

export default CustomRadio;
