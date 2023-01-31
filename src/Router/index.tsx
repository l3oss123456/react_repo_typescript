import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
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
