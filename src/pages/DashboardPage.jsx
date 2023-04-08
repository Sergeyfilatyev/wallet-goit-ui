import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

import { Logo } from "../components/Logo";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default DashboardPage;
