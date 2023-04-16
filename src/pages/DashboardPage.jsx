import { Header } from "../components/Header";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllTransactions } from "../redux/transactions/transactions-operations";
import { fetchAllCategories } from "../redux/categories/categories-operations";

const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllTransactions());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <Dashboard />
      </main>
    </>
  );
};

export default DashboardPage;
