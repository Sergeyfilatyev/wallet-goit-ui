// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Currency } from "./Currency";
import "../i18n";
import { ChangeLanguage } from "./ChangeLanguage/ChangeLanguage";
// import PublicRoute from "../HOCs/PublicRoute";
// import PrivateRoute from "../HOCs/PrivateRoute";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const HomePageDesktop = lazy(() => import("../pages/HomePageDesktop"));
const StatisticsPageDesktop = lazy(() =>
  import("../pages/StatisticsPageDesktop")
);
function App() {
  return (
    <Suspense>
      <ChangeLanguage />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LoginPage />
            </>
          }
        />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="home" element={<HomePageDesktop />} />
          <Route path="statistics" element={<StatisticsPageDesktop />} />
          <Route path="currency" element={<Currency />} />
        </Route>
        <Route path="/change" element={<ChangeLanguage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
