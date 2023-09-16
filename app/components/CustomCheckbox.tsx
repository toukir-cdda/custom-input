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

const CustomCheckbox = ({ ...item }) => {
  const { values, handleChange } = useFormikContext();
  const dispatch = useDispatch();
  return (
    <div style={item?.styles?.container}>
      {item.type === "checkbox" && item.options ? (
        <>
          <label style={item?.styles?.label}>{item.label}</label>
          {item.options?.map((option, index) => (
            <label
              key={index}
              style={item?.styles?.input_label}
              onClick={() =>
                dispatch(
                  selectStyles({
                    field_name: item.name,
                    field_style: item.styles,
                  })
                )
              }
            >
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
          <label
            style={item?.styles?.input_label}
            onClick={() =>
              dispatch(
                selectStyles({
                  field_name: item.name,
                  field_style: item.styles,
                })
              )
            }
          >
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

      <ErrorMessage
        name={item.name}
        component="div"
        className="text-red-500 text-xs py-1 "
      />
    </div>
  );
};

export default CustomCheckbox;
