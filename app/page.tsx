"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "./components/CustomInput";
import { join_forms } from "./data/join_data";

interface CustomInputProps {
  item: any;
}

const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const Home: React.FC<CustomInputProps> = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
      }}
    >
      <Formik
        initialValues={{
          firstname: "",
          role: "",
          multiselect: "",
          gender: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {/* { errors, touched } */}
        {(formikData) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
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
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Home;
