import Media from "react-media";

import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import { Currency } from "./Currency";
// import { useSelector } from "react-redux";
// import { getAuth } from "../redux/auth/auth-selectors";

// import { current } from "../redux/auth/auth-operations";
// import PublicRoute from "../HOCs/PublicRoute";
// import PrivateRoute from "../HOCs/PrivateRoute";

import { verifyUser } from "../shared/api/auth";
import { selectToken } from "../redux/auth/auth-selectors";
import "../i18n";
import { Table, TableMobile } from "./Table";
import { ChangeLanguage } from "./ChangeLanguage/ChangeLanguage";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const HomePageDesktop = lazy(() => import("../pages/HomePageDesktop"));
const StatisticsPageDesktop = lazy(() =>
  import("../pages/StatisticsPageDesktop")
);

function App() {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  const tokenFromParams = searchParams.get("token");
  console.log(tokenFromParams);
  let verificationDone = false;

  useEffect(() => {
    if (tokenFromParams && !verificationDone) {
      dispatch(() => verifyUser(tokenFromParams));
      verificationDone = true;
    }
  }, [tokenFromParams, dispatch]);

  // const dispatch = useDispatch();
  // const isAuth = useSelector(getAuth);

  // useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);

  return (
    <Suspense>
      <ChangeLanguage />
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          <Route path="home" element={<HomePageDesktop />} />
          <Route path="statistics" element={<StatisticsPageDesktop />} />
          <Route path="currency" element={<Currency />} />
        </Route>
      </Routes> */}
      <Media
        queries={{
          xs: "(min-width: 320px)",
          m: "(min-width: 768px)",
        }}
      >
        {(matches) => (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/dashboard" element={<DashboardPage />}>
              {matches.m && <Route path="home" element={<Table />} />}
              {matches.xs && <Route path="home" element={<TableMobile />} />}
              <Route path="statistics" element={<></>} />
              <Route path="currency" element={<Currency />} />
            </Route>
          </Routes>
        )}
      </Media>
    </Suspense>
  );
}

export default App;
