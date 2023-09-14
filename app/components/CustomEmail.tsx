import { selectStyles } from "@/redux/styleSlice";
import { useFormikContext, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
const CustomEmail = ({ ...item }) => {
  const { values, handleChange } = useFormikContext();
  const dispatch = useDispatch();
  return (
    <div style={item.style.container}>
      <label style={item.style.label}>{item.label}</label>
      <input
        {...item}
        value={values[item.name]}
        onFocus={() => dispatch(selectStyles(item.style))}
        onChange={handleChange}
      />
      <ErrorMessage
        name={item.name}
        component="div"
        className="text-red-500 text-xs py-1 "
      />
    </div>
  );
};

export default CustomEmail;
