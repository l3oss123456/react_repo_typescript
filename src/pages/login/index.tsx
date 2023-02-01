import React, { useState } from "react"
import { setLocalStorage } from "../../services/utils/Storage"
import { Navigate } from "react-router-dom"
import { Box, IconButton, InputAdornment, TextField } from "@mui/material"
import { useForm } from "react-hook-form"
import Spacer from "../../components/Spacer"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"

const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors }
    } = useForm()

    console.log("errorsss", errors)

    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
    }
    const onSubmit = (data: Object) => {
        console.log(data)
        setLocalStorage(`loginInfo`, {
            username: "test",
            password: "1234",
            firstName: "boss",
            lastName: "kung"
        })
        setIsLogin(true)
    }

    return (
        <Spacer>
            {isLogin && <Navigate to={`/`} replace />}

            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    height: `100vh`
                }}
            >
                <Box style={{ display: `flex`, flexDirection: `column`, justifyContent: `center` }}>
                    <Box style={{ textAlign: `left`, width: `max-content` }}>
                        <TextField label="username" variant="outlined" defaultValue="boss" {...register("username", { required: true })} />
                        {errors.username && <p style={{ color: `red` }}>{`Invalid username!`}</p>}
                    </Box>

                    <Box style={{ marginTop: 20, width: 200 }}>
                        <TextField
                            type={showPassword ? `text` : `password`}
                            label="password"
                            variant="outlined"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={handleClickShowPassword} edge="end">
                                            {showPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                            defaultValue="kung"
                            {...register("password", { required: true })}
                        />
                        {errors.password && <p style={{ color: `red` }}>{`Invalid password!`}</p>}
                    </Box>
                    <button
                        disabled={Object.values(errors).length > 0}
                        style={{
                            marginTop: 20
                        }}
                    >
                        Login
                    </button>
                </Box>
            </form>
        </Spacer>
    )
}

export default Login
