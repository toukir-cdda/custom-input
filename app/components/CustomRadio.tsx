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

const CustomRadio = ({ ...item }) => {
  const dispatch = useDispatch();
  const { values, handleChange } = useFormikContext();
  return (
    <div
      style={item?.styles?.container}
      onClick={() =>
        dispatch(
          selectStyles({ field_name: item.name, field_style: item.styles })
        )
      }
    >
      <label style={item?.styles?.label}>{item.label}</label>
      {item.type === "radio" && (
        <>
          {item.options?.map((option, index) => (
            <label key={index} style={item?.styles?.input_label}>
              <input
                type={item.type}
                name={item.name}
                value={option.value}
                onChange={handleChange}
              />
              <span>{option.desc}</span>
            </label>
          ))}
        </>
      )}

      <ErrorMessage
        name={item.name}
        component="div"
        className="text-red-500 text-xs py-1 "
      />
    </div>
  );
};

export default CustomRadio;
