import { Navigate } from "react-router-dom"
import { getLocalStorage } from "../services/utils/Storage"
import Layout from "../layout"
import { useState } from "react"

const ProtectedRoutes = ({ children }: any) => {
    // const [token, setToken] = useState(null)

    // const token = fetch(`/get_token`, {
    //     method: "GET",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json"
    //     }
    // })

    const token = new Promise(async (resolve, reject) => {
        const res = await fetch(`/get_token`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        console.log("resp;", res.json())
        resolve(res)
    })

    // fetch("/get_token", {
    //     method: "GET",
    //     headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json"
    //     }
    // }).then(async (res) => {
    //     const data = await res.json()
    //     if (data.code == 1000) {
    //         console.log("data12123;", data)
    //         setToken(data)
    //     } else {
    //         setToken(null)
    //     }
    // })
    console.log("token;", token)

    if (!token) {
        return <Navigate to="/login" />
    }

    return <Layout>{children}</Layout>

    // const auth = getLocalStorage("loginInfo")

    // if (!auth) {
    //     return <Navigate to="/login" />
    // }
    // return <Layout>{children}</Layout>
}

export default ProtectedRoutes
