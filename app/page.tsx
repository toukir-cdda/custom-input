"use client";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import CustomInput from "./components/CustomInput";
import { join_forms } from "./data/join_data";
import setFormikPropsValue from "../utils/setFormikPropsValue";
import { useSelector, useDispatch } from "react-redux";
import EditStyle from "./components/EditStyle";
import { selectStyles } from "@/redux/styleSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { styles } = useSelector((state) => state.inputStyle);
  // console.log(setFormikPropsValue(join_forms?.join));
  const { initialValues, validationSchema } = setFormikPropsValue(
    join_forms?.join
  );
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
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
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              width: "30%",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "10px",
              overflowY: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {join_forms?.join?.map((item, index) => {
                return <CustomInput key={index} {...item} />;
              })}
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

      <div
        style={{
          width: "40%",
          color: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {Object.keys(styles).length !== 0 && <EditStyle styleData={styles} />}
      </div>
    </div>
  );
};

export default Home;
