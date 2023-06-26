import Layout from "./Layout/Layout";
import { ClockerProvider } from "./context/ClockerContext";

const Clocker = () => {
  return (
    <ClockerProvider>
      <Layout />
    </ClockerProvider>
  );
};

export default Clocker;
