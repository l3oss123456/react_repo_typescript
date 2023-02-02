import React from "react"
import { useForm, Controller } from "react-hook-form"
import Spacer from "../../components/Spacer"
import { Button, TextField, Box } from "@mui/material"

const Test = () => {
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm()

    console.log("errorserrors;", errors)

    const onSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Spacer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="firstName"
                    control={control}
                    rules={{
                        required: true
                    }}
                    defaultValue={``}
                    render={({ field }) => {
                        return (
                            <Box>
                                <TextField {...field} label={field.name} variant="outlined" />
                                {errors.firstName && <p style={{ color: `red` }}>{`Invalid first name!`}</p>}
                            </Box>
                        )
                    }}
                />

                <Controller
                    name={`lastName`}
                    control={control}
                    rules={{
                        required: true
                    }}
                    defaultValue={``}
                    render={({ field }) => {
                        return (
                            <Box>
                                <TextField {...field} label={field.name} variant="outlined" />
                                {errors.lastName && <p style={{ color: `red` }}>{`Invalid last name!`}</p>}
                            </Box>
                        )
                    }}
                />

                <Button variant="contained" color="primary" type="submit" disabled={Object.values(errors).length > 0}>
                    Sign up
                </Button>
            </form>
        </Spacer>
    )
}

export default Test
