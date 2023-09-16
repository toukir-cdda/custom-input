import { useFormikContext, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { clearStyles, selectStyles } from "@/redux/styleSlice";

// interface CustomInputProps {
//   label: string;
//   name: string;
//   type: "text" | "date" | "password" | "select" | "radio" | "checkbox";
//   options?: { label: string; value: string }[];
//   style?: any;
//   placeholder?: string;
//   item: any;
//   default?: string;
// }

const CustomTextBox = ({ ...item }) => {
  const dispatch = useDispatch();
  const { values, handleChange } = useFormikContext();
  return (
    <div style={item.styles.container}>
      <label style={item.styles.label}>{item.label}</label>
      <input
        style={item.styles.input}
        value={values[item.name]}
        {...item}
        onChange={handleChange}
        onFocus={() =>
          dispatch(
            selectStyles({ field_name: item.name, field_style: item.styles })
          )
        }
      />
      <ErrorMessage
        name={item.name}
        component="div"
        className="text-red-500 text-xs py-1 "
      />
    </div>
  );
};

export default CustomTextBox;
