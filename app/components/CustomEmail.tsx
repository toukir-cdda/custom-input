import { selectStyles } from "@/redux/styleSlice";
import { useFormikContext, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
const CustomEmail = ({ ...item }) => {
  const { values, handleChange } = useFormikContext();
  const dispatch = useDispatch();
  return (
    <div style={item.styles.container}>
      <label style={item.styles.label}>{item.label}</label>
      <input
        style={item?.styles?.input}
        // style={{
        //   backgroundColor: "transparent",
        //   border: "5px solid red",
        //   borderBottom: "1px dotted white",
        //   padding: "0 5px",
        //   color: "red",
        // }}
        {...item}
        value={values[item.name]}
        onFocus={() =>
          dispatch(
            selectStyles({ field_name: item.name, field_style: item.styles })
          )
        }
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
