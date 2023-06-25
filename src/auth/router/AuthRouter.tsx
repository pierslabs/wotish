import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../Login";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/*" element={<Navigate to={"/auth/login"} />} />
    </Routes>
  );
};

export default AuthRouter;
