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
    <div style={item.style}>
      <label>{item.label}</label>
      {item.type === "radio" && (
        <>
          {item.options?.map((option, index) => (
            <label key={index}>
              <input
                type={item.type}
                name={item.name}
                value={option.value}
                onChange={handleChange}
              />
              {option.desc}
            </label>
          ))}
        </>
      )}

      <ErrorMessage name={item.name} />
    </div>
  );
};

export default CustomRadio;
