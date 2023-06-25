import { Route, Routes } from "react-router-dom";
import ClockerRouter from "../clocker/router/ClockerRouter";
import AuthRouter from "../auth/router/AuthRouter";

const Approuter = () => {
  const authenticated = true;
  return (
    <Routes>
      {authenticated ? (
        <Route path="/*" element={<ClockerRouter />} />
      ) : (
        <>
          <Route path="/*" element={<AuthRouter />} />
        </>
      )}
    </Routes>
  );
};

export default Approuter;
