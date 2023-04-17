import Media from "react-media";
import { useDispatch } from "react-redux";
import { Routes, Route, useSearchParams, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { Currency } from "./Currency";
import PublicRoute from "../HOCs/PublicRoute";
import PrivateRoute from "../HOCs/PrivateRoute";
import { verify, refresh } from "../redux/auth/auth-operations";
import "../i18n";
import { Table, TableMobile } from "./Table";
import { Loader } from "./Loader/Loader";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const StatisticsPageDesktop = lazy(() =>
  import("../pages/StatisticsPageDesktop")
);
const VerifyPage = lazy(() => import("../pages/VerifyPage"));

function App() {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const tokenFromParams = searchParams.get("token");

  useEffect(() => {
    if (tokenFromParams && !localStorage.getItem("token")) {
      dispatch(verify(tokenFromParams));
    }

    if (localStorage.getItem("token")) {
      dispatch(refresh());
    }
  }, [dispatch, tokenFromParams]);

  return (
    <Suspense fallback={<Loader />}>
      <Media
        queries={{
          xs: "(min-width: 320px)",
          m: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="/verify"
              element={
                <PublicRoute restricted>
                  <VerifyPage />
                </PublicRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            >
              {matches.m && <Route path="home" element={<Table />} />}
              {matches.xs && <Route path="home" element={<TableMobile />} />}
              <Route path="statistics" element={<StatisticsPageDesktop />} />
              <Route path="currency" element={<Currency />} />
            </Route>
            <Route
              path="*"
              element={
                <PublicRoute>
                  <Navigate to="/" />
                </PublicRoute>
              }
            />
          </Routes>
        )}
      </Media>
    </Suspense>
  );
}

export default App;
