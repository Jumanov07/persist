import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn";
import Profile from "../components/Profile";
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const { isAuth } = useSelector((state) => state.signIn);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signIn" replace />} />

      <Route path="/signIn" element={<SignIn />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute
            Element={<Profile />}
            isAuth={isAuth}
            fallbackPath="/signIn"
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
