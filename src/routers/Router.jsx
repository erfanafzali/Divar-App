import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import Error404page from "../pages/Error404page";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";

function Router() {
  const queryKey = ["profile"];
  const queryFn = getProfile;

  const { data, isLoading ,error , isFetching} = useQuery({ queryKey, queryFn });

  console.log({ data, isLoading, error , isFetching });

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="*" element={<Error404page />} />
    </Routes>
  );
}

export default Router;
