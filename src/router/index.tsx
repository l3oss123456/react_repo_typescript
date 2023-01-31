import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import ProtectedRoutes from "./ProtectRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/login`} element={<Login />} />

        <Route
          path={`/`}
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
