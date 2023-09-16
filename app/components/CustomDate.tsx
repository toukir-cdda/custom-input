import { clearStyles, selectStyles } from "@/redux/styleSlice";
import { useFormikContext, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();

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

export default CustomDate;
