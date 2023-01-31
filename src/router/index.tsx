import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import ProtectedRoutes from './ProtectRoutes';
import ScrollTop from '../components/ScrollTop';

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
                </Routes>
            </ScrollTop>
        </BrowserRouter>
    );
};

export default Router;
