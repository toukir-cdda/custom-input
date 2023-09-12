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

const CustomCheckbox: React.FC<CustomInputProps> = ({
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
      {item.type === "checkbox" && item.options ? (
        <>
          <label>{item.label}</label>
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
      ) : (
        <>
          <label>
            <input
              type={item.type}
              name={item.name}
              // value={default}
              onChange={handleChange}
            />
            {item.label}
          </label>
        </>
      )}

      <ErrorMessage name={item.name} />
    </div>
  );
};

export default CustomCheckbox;
