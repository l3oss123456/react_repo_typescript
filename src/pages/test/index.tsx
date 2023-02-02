import React from "react"
import Spacer from "../../components/Spacer"
// import Select from "react-select"
import { useForm, Controller } from "react-hook-form"
import { Input, Box, TextField } from "@mui/material"

const Test = () => {
    const {
        register,
        // handleSubmit,
        // watch,
        formState: { errors }
    } = useForm()

    const { control, handleSubmit } = useForm({
        defaultValues: {
            firstName: "xxx",
            username2: "test"
        }
    })
    const onSubmit = (data: Object) => {
        console.log(data)
    }

    return (
        <Spacer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => {
                        return <Input {...field} />
                    }}
                />

                <Controller
                    name="username2"
                    control={control}
                    render={({ field }) => {
                        console.log("fieldfield,field", field)

                        return (
                            <Box style={{ textAlign: `left`, width: `max-content` }}>
                                <TextField
                                    label={field.name}
                                    variant="outlined"
                                    defaultValue={field.value}
                                    {...register("username", { required: true })}
                                />
                                {errors.username && <p style={{ color: `red` }}>{`Invalid username!`}</p>}
                            </Box>
                        )
                    }}
                />

                {/* <Controller
                    name="select"
                    control={control}
                    render={({ field }) => (
                        <select
                            {...field}
                            options={[
                                { value: "chocolate", label: "Chocolate" },
                                { value: "strawberry", label: "Strawberry" },
                                { value: "vanilla", label: "Vanilla" }
                            ]}
                        />
                    )}
                />
                 */}
                <input type="submit" />
            </form>
        </Spacer>
    )
}

export default Test
