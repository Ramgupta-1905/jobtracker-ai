import { Outlet } from "react-router-dom";
import Sidebar from "../components/dashboard/Sidebar";

export default function MainLayout() {
  return (
    <>
      <Sidebar />

      <main className="ml-64 h-screen overflow-y-auto bg-gray-100 ">
        <Outlet />
      </main>
    </>
  );
}