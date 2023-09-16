import { useFormikContext, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { clearStyles, selectStyles } from "@/redux/styleSlice";
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

const CustomSelect = ({ ...item }) => {
  const { handleChange } = useFormikContext();
  const dispatch = useDispatch();
  return (
    <div style={item?.styles?.container}>
      <label style={item?.styles?.label}>{item.label}</label>
      {item.type === "select" && (
        <select
          onFocus={() =>
            dispatch(
              selectStyles({ field_name: item.name, field_style: item.styles })
            )
          }
          style={item?.styles?.input}
          name={item.name}
          onChange={handleChange}
          multiple={item.array}
        >
          {item.options?.map((option, index) => (
            <option value={option.value} key={index}>
              {option.desc}
            </option>
          ))}
        </select>
      )}

      <ErrorMessage
        name={item.name}
        component="div"
        className="text-red-500 text-xs py-1 "
      />
    </div>
  );
};

export default CustomSelect;
