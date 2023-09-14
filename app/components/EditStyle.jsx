// "use client";
import { Formik, Form } from "formik";

const EditStyle = ({ styleData }) => {
  const styleContainers = [];

  Object.keys(styleData).map((styleName, index) => {
    const data = styleData[styleName];

    if (typeof data === "object") {
      // console.log(data);
      const arrValue = {};
      arrValue[styleName] = data;
      styleContainers.push(arrValue);
    }
  });
  styleContainers?.map((item) => {
    Object.keys(Object.values(item)[0]).map((styleKey, index) => {
      // console.log(styleKey);
      const styleVal = Object.values(item)[0][styleKey];
      console.log(styleVal);
    });
  });

  return (
    <>
      {styleContainers?.map((item) => (
        <>
          <div>{Object.keys(item)}</div>
          <Formik
            initialValues={Object.values(item)[0]}
            // validationSchema={}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched, values }) => (
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
                {Object.keys(Object.values(item)[0]).map((styleKey, index) => (
                  <input
                    className="bg-white text-gray-700"
                    type="text"
                    name={styleKey}
                    id=""
                    value={values[styleKey]}
                    placeholder="enter your style"
                  />
                ))}

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
        </>
      ))}
    </>
    //     <Formik
    //       initialValues={{}}
    //       // validationSchema={}
    //       onSubmit={(values) => {
    //         console.log(values);
    //       }}
    //     >
    //       <>
    //         <h3 className="text-white">Edit any style</h3>
    //         {({ errors, touched }) => (
    //           <Form
    //             style={{
    //               height: "100%",
    //               display: "flex",
    //               flexDirection: "column",
    //               gap: "10px",
    //               width: "30%",
    //               padding: "10px",
    //               border: "1px solid white",
    //               borderRadius: "10px",
    //               overflowY: "auto",
    //             }}
    //           >
    //             <div
    //               style={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //               }}
    //             >
    //               {/* {join_forms?.join?.map((item, index) => (
    //   <CustomInput key={index} {...item} />
    // ))} */}
    //               <input type="text" name="" id="" />
    //             </div>
    //             <button
    //               style={{
    //                 backgroundColor: "skyblue",
    //                 color: "white",
    //                 fontWeight: "bolder",
    //                 textShadow: "2px 2px #ff0000",
    //                 borderRadius: "7px",
    //               }}
    //               type="submit"
    //             >
    //               Submit
    //             </button>
    //           </Form>
    //         )}
    //       </>
    //     </Formik>
  );
};

export default EditStyle;
