import React, { FC } from "react"
import { InputAdornment, TextField } from "@mui/material"

interface Props {
    value?: string
    label?: string
    type?: string
    autoFocus?: boolean
    error?: boolean
    onChange?: any
    onBlur?: any
    icon?: any
    variant?: any
    style?: any
}

const Input: FC<Props> = ({ value, label, type = `text`, variant = `outlined`, autoFocus, error, onChange, onBlur, icon, style }) => {
    return (
        <TextField
            value={value}
            label={label}
            type={type}
            variant={variant}
            autoFocus={autoFocus}
            error={error}
            onChange={onChange}
            onBlur={onBlur}
            InputProps={{
                endAdornment: <InputAdornment position="start">{icon ? <>{icon}</> : null}</InputAdornment>
            }}
            style={{ width: `100%`, ...style }}
        />
    )
}

export default Input
