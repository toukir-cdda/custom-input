import { useFormikContext, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { clearStyles, selectStyles } from '@/redux/styleSlice';
import './style.css';
import { jss } from 'react-jss';
import { useEffect, useState } from 'react';
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

      const sheet = jss.createStyleSheet(item?.styles).attach();

      const jsxStyles = `
      .container {
            background-color: green;
      }
      .container:hover {
            background-color: lightblue;
      }
      label {
            color: blue;
      }
      @media (min-width: 1024px) {
            .container {
                  background-color: blue;
            }
      }
`;

      return (
            <div
                  className={sheet.classes.container}
                  // className="container"
                  // style={item?.styles?.container}
            >
                  <label
                        // className="input_label"
                        className={sheet.classes.label}
                        // style={item?.styles?.label}
                  >
                        {item.label}
                  </label>
                  <input
                        className={sheet.classes.input}
                        // className={cssClasses.input}
                        // style={item?.styles?.input}
                        value={values[item.name]}
                        {...item}
                        onChange={handleChange}
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
                  <style jsx>{jsxStyles}</style>
            </div>
      );
};

export default CustomTextBox;
