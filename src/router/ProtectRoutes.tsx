import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../services/utils/Storage";

const ProtectedRoutes = ({ children }: any) => {
  const auth = getLocalStorage("loginInfo");

  if (!auth) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoutes;
