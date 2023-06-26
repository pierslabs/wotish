import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { ClockerContext } from "../context/ClockerContext";

const Layout = () => {
  const { handleSideBarOpen } = useContext(ClockerContext);
  return (
    <div>
      <main className="flex flex-col items-center justify-center flex-1">
        <button
          onClick={() => handleSideBarOpen(true)}
          className="fixed p-2 text-white bg-black rounded-lg top-5 left-5"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <span className="sr-only">Open menu</span>
        </button>
      </main>
      <Sidebar />
    </div>
  );
};

export default Layout;
