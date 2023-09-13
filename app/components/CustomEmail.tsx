import { useFormikContext, ErrorMessage } from "formik";

const CustomEmail = ({ ...item }) => {
  const { values, handleChange, setFieldValue } = useFormikContext();
  // console.log(item.style);
  return (
    <div
      style={item.style.container}
      // style={{
      //   display: "flex",
      //   flexDirection: "column",
      //   padding: "4px",
      // }}
    >
      <label
        // style={{ color: "lightgray" }}
        style={item.style.label}
      >
        {item.label}
      </label>
      <input
        // style={item.style.input}
        // style={{
        //   background: "transparent",
        //   border: "none",
        //   borderBottom: "1px dotted white",
        //   padding: "0 5px",
        //   color: "darkgray",
        // }}
        // type={item.type}
        // name={item.name}
        // value={item.default}
        {...item}
        onChange={handleChange}
        // placeholder={item.placeholder}
      />
      <ErrorMessage name={item.name} />
    </div>
  );
};

export default CustomEmail;
