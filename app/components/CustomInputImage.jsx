import { useFormikContext, ErrorMessage } from "formik";
const CustomInputImage = ({ ...item }) => {
  const { values, handleChange } = useFormikContext();
  return (
    <label style={item?.style?.container} htmlFor={item.name}>
      <input
        id={item.name}
        {...item}
        style={item?.style?.input}
        value={values[item.name]}
        onChange={handleChange}
      />
      {item.label}
    </label>
  );
};

export default CustomInputImage;
