import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Approuter from "./router/Approuter";

export default function App() {
  return (
    <BrowserRouter>
      <Approuter />
    </BrowserRouter>
  );
}
