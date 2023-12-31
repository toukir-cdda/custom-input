import { clearStyles, selectStyles } from '@/redux/styleSlice';
import { useFormikContext, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

interface CustomInputProps {
      label: string;
      name: string;
      type: 'text' | 'date' | 'password' | 'select' | 'radio' | 'checkbox';
      options?: { label: string; value: string }[];
      style?: any;
      placeholder?: string;
      item: any;
}

const CustomDate = ({ ...item }) => {
      const { values, handleChange } = useFormikContext();
      const dispatch = useDispatch();

      return (
            <div style={item?.styles?.container}>
                  <label style={item?.styles?.label}>{item.label}</label>
                  <input
                        style={item?.styles?.input}
                        type={item.type}
                        name={item.name}
                        value={values[item.name]}
                        // {...item}
                        onChange={handleChange}
                        placeholder={item.placeholder}
                        onFocus={() =>
                              dispatch(
                                    selectStyles({
                                          field_name: item.name,
                                          field_style: item.styles,
                                    })
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
