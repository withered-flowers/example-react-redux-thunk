import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default () => (
  <main className="p-4 text-gray-600 flex flex-col gap-4 lg:text-scal">
    <NavBar />
    <Outlet />
  </main>
);
