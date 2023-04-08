import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";
import { Currency } from "../components/Currency";

import { Logo } from "../components/Logo";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
        <Currency />
        <Outlet />
      </main>
    </>
  );
};

export default DashboardPage;
