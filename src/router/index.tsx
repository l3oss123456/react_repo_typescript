import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoutes from "./ProtectRoutes"
import ScrollTop from "../components/ScrollTop"
import Login from "../pages/login"
import Home from "../pages/home"
import Test from "../pages/test/index"

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollTop>
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
                    <Route
                        path={`/test`}
                        element={
                            <ProtectedRoutes>
                                <Test />
                            </ProtectedRoutes>
                        }
                    />
                </Routes>
            </ScrollTop>
        </BrowserRouter>
    )
}

export default Router
