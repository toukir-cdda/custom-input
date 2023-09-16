"use client";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData } from "../../../redux/formSlice";

const CustomForm = () => {
  const dispatch = useDispatch();
  const { field_style: initialValues, field_name } = useSelector(
    (state) => state.inputStyle
  );

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      // Handle form submission here
      // console.log(values);
      dispatch(
        updateFormData({ updated_styles: values, field_name: field_name })
      );
    },
  });

  useEffect(() => {
    formik.setValues(initialValues);
  }, [initialValues]);

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  useEffect(() => {
    dispatch(
      updateFormData({ updated_styles: formik.values, field_name: field_name })
    );
  }, [formik.values]);

  // Function to render form fields with labels for properties
  const renderFields = (fieldType, initials) => {
    return (
      <div>
        {typeof initials[fieldType] === "object" ? (
          // Render heading for object and its nested properties
          <>
            {Object.keys(initials[fieldType]).length !== 0 && (
              <>
                <h3 className="bg-green-300 text-teal-950">{fieldType}</h3>
                {Object.keys(initials[fieldType]).map((nestedKey) => (
                  <div key={nestedKey} className=" flex flex-col">
                    <label>{nestedKey}</label>
                    <input
                      className=" text-gray-500 "
                      name={`${fieldType}.${nestedKey}`}
                      type="text"
                      placeholder={nestedKey}
                      onChange={handleChange}
                      value={
                        formik.values[fieldType] !== undefined &&
                        formik.values[fieldType][nestedKey]
                      }
                    />
                  </div>
                ))}
              </>
            )}
          </>
        ) : (
          // Render label and input field for non-object properties
          <div className=" flex flex-col ">
            <label>{fieldType}</label>
            <input
              className=" text-gray-500 "
              name={`${fieldType}`}
              type="text"
              placeholder={fieldType}
              onChange={formik.handleChange}
              value={formik.values[fieldType]}
            />
          </div>
        )}
      </div>
    );
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className=" flex flex-col gap-2 p-3 border rounded-md "
    >
      {Object.keys(initialValues).map((fieldType) => (
        <div className="bg-slate-400" key={fieldType}>
          {renderFields(fieldType, initialValues)}
        </div>
      ))}
      <button type="submit" className="bg-blue-500 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default CustomForm;
