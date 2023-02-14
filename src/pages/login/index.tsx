import React, { FC, useState } from "react"
import { Button, Box } from "@mui/material"
import { useForm, Controller } from "react-hook-form"
import Spacer from "../../components/Spacer"
import { setLocalStorage } from "../../services/utils/Storage"
import { Navigate, useNavigate } from "react-router-dom"
import Input from "../../components/input/Input"
import InputPassword from "../../components/input/InputPassword"

interface propTypes {}

const Login: FC<propTypes> = () => {
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()

    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    const onSubmit = (data: any) => {
        // setLocalStorage(`loginInfo`, {
        //     username: data.username,
        //     password: data.password,
        //     firstName: "boss",
        //     lastName: "kung"
        // })
        // setIsLogin(true)

        fetch("/create_token", {
            method: "POST",
            body: JSON.stringify({
                access_token: data,
                refresh_token: data
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        }).then(async (res) => {
            const data = await res.json()
            // console.log("data;", data)
            if (data.code == 1000) {
                // setLocalStorage(`loginInfo`, {
                //     username: data.username,
                //     password: data.password,
                //     firstName: "boss",
                //     lastName: "kung"
                // })
                navigate("/")
            }
        })
    }

    return (
        <Spacer>
            {isLogin && <Navigate to={`/`} />}

            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                    height: `100vh`,
                    display: `flex`,
                    flexDirection: `column`,
                    justifyContent: `center`,
                    alignItems: `center`
                }}
            >
                <Box>
                    <Controller
                        name={`username`}
                        control={control}
                        defaultValue={`test123abc`}
                        rules={{
                            required: true
                        }}
                        render={({ field }) => {
                            return (
                                <Box>
                                    <Input
                                        name={field.name}
                                        value={field.value}
                                        // onChange={field.onChange}
                                        onChange={(e: any) => {
                                            field.onChange(e.target.value)
                                        }}
                                        onBlur={field.onBlur}
                                        label={field.name}
                                        autoFocus
                                        error={errors.username ? true : false}
                                        style={{
                                            width: `100%`
                                        }}
                                    />
                                    {errors.username && <p style={{ color: `red` }}>{`Invalid username!`}</p>}
                                </Box>
                            )
                        }}
                    />

                    <Controller
                        name={`password`}
                        control={control}
                        defaultValue={`1234abd34er`}
                        rules={{
                            required: true
                        }}
                        render={({ field }) => {
                            return (
                                <Box
                                    style={{
                                        margin: `20px 0px`
                                    }}
                                >
                                    <InputPassword
                                        name={field.name}
                                        value={field.value}
                                        onChange={field.onChange}
                                        onBlur={field.onBlur}
                                        label={field.name}
                                        error={errors.password ? true : false}
                                    />
                                    {errors.password && <p style={{ color: `red` }}>{`Invalid password!`}</p>}
                                </Box>
                            )
                        }}
                    />

                    <Button
                        variant="contained"
                        color={`primary`}
                        type={`submit`}
                        disabled={Object.values(errors).length > 0}
                        style={{
                            width: `100%`,
                            marginTop: 20
                        }}
                    >
                        Login
                    </Button>
                </Box>
            </form>
        </Spacer>
    )
}

export default Login
