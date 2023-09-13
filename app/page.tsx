"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "./components/CustomInput";
import { join_forms } from "./data/join_data";
import setFormikPropsValue from "../utils/setFormikPropsValue";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Home = () => {
  // console.log(setFormikPropsValue(join_forms?.join));
  const { initialValues, validationSchema } = setFormikPropsValue(
    join_forms?.join
  );
  console.log(validationSchema);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "black",
        opacity: "0.8",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {/* { errors, touched } */}
        {({ errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "30%",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {join_forms?.join?.map((item, index) => (
                <CustomInput key={index} {...item} />
              ))}
            </div>
            <button
              style={{
                backgroundColor: "skyblue",
                color: "white",
                fontWeight: "bolder",
                textShadow: "2px 2px #ff0000",
                borderRadius: "7px",
              }}
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Home;
