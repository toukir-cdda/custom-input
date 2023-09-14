import { useFormikContext, ErrorMessage } from "formik";
import getStyleFromEle from "../../utils/getStyleFromEle";
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
  const { values, handleChange, setFieldValue } = useFormikContext();
  return (
    <div style={item.style.container}>
      <label style={item.style.label}>{item.label}</label>
      <input
        style={item.style.input}
        value={values[item.name]}
        {...item}
        onChange={handleChange}
        onFocus={() => dispatch(selectStyles(item.style))}
        // onFocus={() => eval(`(${item.onfocus})`)}
        // onBlur={() => dispatch(clearStyles())}
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
