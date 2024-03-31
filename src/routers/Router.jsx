import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import Error404page from "../pages/Error404page";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user";
import Loader from "../components/modules/Loader";

function Router() {
  const queryKey = ["profile"];
  const queryFn = getProfile;

  const { data, isLoading, error } = useQuery({
    queryKey,
    queryFn,
  });
  console.log({ data, error, isLoading });

  if (isLoading) return <Loader/>;

  return (
    <Routes>
      <Route index element={<HomePage />} />
      {/* if user not Login navigate to authPage*/}
      <Route
        path="/dashboard"
        element={data ? <DashboardPage /> : <Navigate to="/auth" />}
      />
      {/* handle admin role route */}
      <Route
        path="/admin"
        element={
          data && data.data.role === "ADMIN" ? (
            <AdminPage />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      {/* if user login => navigate to dashboard */}
      <Route
        path="/auth"
        element={data ? <Navigate to="/dashboard" /> : <AuthPage />}
      />
      <Route path="*" element={<Error404page />} />
    </Routes>
  );
}

export default Router;

//admin number 09189990099 to login
