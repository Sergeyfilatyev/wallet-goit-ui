import { Outlet } from "react-router-dom";

import { Header } from "../components/Header";

import { Currency } from "../components/Currency";

const DashboardPage = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Currency />
      </main>
    </>
  );
};

export default DashboardPage;
