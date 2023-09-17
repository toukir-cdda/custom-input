import { useFormikContext, ErrorMessage } from 'formik';
const CustomInputColor = ({ ...item }) => {
      const { values, handleChange } = useFormikContext();
      return (
            <label style={item?.styles?.container} htmlFor={item.name}>
                  <input
                        id={item.name}
                        {...item}
                        style={item?.styles?.input}
                        value={values[item.name]}
                        onChange={handleChange}
                  />
                  {item.label}
            </label>
      );
};

export default CustomInputColor;
