import { Navigate, Route, Routes } from "react-router-dom";
import Clocker from "../Clocker";

const ClockerRouter = () => {
  return (
    <Routes>
      <Route path="/clocker" element={<Clocker />} />
      <Route path="/*" element={<Navigate to="clocker" />} />
    </Routes>
  );
};

export default ClockerRouter;
