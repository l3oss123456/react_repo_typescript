import { Navigate } from "react-router-dom"
import { getLocalStorage } from "../services/utils/Storage"
import Layout from "../layout"

const ProtectedRoutes = ({ children }: any) => {
    const auth = getLocalStorage("loginInfo")

    if (!auth) {
        return <Navigate to="/login" />
    }
    return <Layout>{children}</Layout>
}

export default ProtectedRoutes
