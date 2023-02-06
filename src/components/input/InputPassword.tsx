import React, { FC, useState } from "react"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined"

interface Props {
    name?: string
    value?: string
    label?: string
    autoFocus?: boolean
    error?: boolean
    onChange?: any
    onBlur?: any
    icon?: any
    variant?: any
    style?: any
}

const InputPassword: FC<Props> = ({ name, value, label = `password`, variant = `outlined`, autoFocus, error, onChange, onBlur, style }) => {
    const [revealPassword, setRevealPassword] = useState(false)

    return (
        <TextField
            value={value}
            label={label}
            type={revealPassword ? `text` : `password`}
            variant={variant}
            autoFocus={autoFocus}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="start">
                        <IconButton
                            onClick={() => {
                                setRevealPassword(!revealPassword)
                            }}
                        >
                            {revealPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
            style={{ width: `100%`, ...style }}
        />
    )
}

export default InputPassword
