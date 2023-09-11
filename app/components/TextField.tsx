const TextField = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor="user-name" style={{ padding: "3px 0", color: "gray" }}>
        {props.label}
      </label>
      <input
        // id="user-name"
        // style={{
        //   borderBottom: "1px solid gray",
        //   color: "gray",
        //   outline: "none",
        // }}
        // type="text"
        // name="firstName"
        // placeholder="Enter your first name"
        {...props}
      />
    </div>
  );
};

export default TextField;
