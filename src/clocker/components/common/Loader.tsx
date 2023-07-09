import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <ClockLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
