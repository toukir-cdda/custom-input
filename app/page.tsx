import TextField from "./components/TextField";

export default function Home() {
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <label htmlFor="user-name">First name</label>
    //   <input
    //     id="user-name"
    //     style={{
    //       border: "1px solid gray",
    //       borderRadius: "10px",
    //       padding: "5px 10px",
    //       color: "gray",
    //     }}
    //     type="text"
    //     name="firstName"
    //     placeholder="Enter your first name"
    //   />
    // </div>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField />
    </div>
  );
}
