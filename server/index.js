const path = require("path")
const express = require("express")
const app = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

app.use(
    cors({
        origin: `http://localhost:${process.env.REACT_APP_CLIENT_PORT}`,
        credentials: true
    })
)
app.use(express.json())
app.use(cookieParser())

app.post(`/create_token`, (req, res) => {
    res.status(202)
        .cookie("access_token", req.body.access_token, {
            sameSite: "strict",
            path: "/",
            expires: new Date(new Date().getTime() + 999999 * 999999),
            httpOnly: true
        })
        .cookie("refresh_token", req.body.refresh_token, {
            sameSite: "strict",
            path: "/",
            expires: new Date(new Date().getTime() + 999999 * 999999),
            httpOnly: true
        })
        .json({ code: 1000, result: "success", description: "create token done." })
})
app.get("/get_token", (req, res) => {
    let c = cookieParser.JSONCookies(req.cookies)
    let token = c?.access_token ?? null
    res.json({
        access_token: token ?? "none",
        code: token ? 1000 : 4000,
        result: token ? "success" : "failed",
        description: "get token."
    })
})
app.get(`/delete_token`, (req, res) => {
    res.status(202)
        .clearCookie("access_token")
        .clearCookie("refresh_token")
        .json({ code: 1000, result: "success", description: "delete token done." })
})

app.use(express.static(path.join(__dirname, "..", "build")))
app.use(express.static("public"))

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"))
})

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
    console.log(`server started on port ${process.env.REACT_APP_SERVER_PORT}`)
})
