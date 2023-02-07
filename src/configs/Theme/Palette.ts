const Palette = (mode: string) => {
    let palette = {
        primary: {
            main: `white`,
            light: `white`,
            dark: `white`,
            contrastText: `white`
        },
        text: {
            primary: `black`,
            secondary: `black`,
            disabled: `gray`,
            info: `blue`,
            warning: `yellow`,
            error: `red`
        }
    }

    if (mode === "dark") {
        palette = {
            primary: {
                main: `#14162c`,
                light: `gray`,
                dark: `#14162c`,
                contrastText: `rgba(0, 0, 0, 0.87)`
            },
            text: {
                primary: `white`,
                secondary: `white`,
                disabled: `gray`,
                info: `blue`,
                warning: `yellow`,
                error: `red`
            }
        }
    }

    return palette
}

export default Palette
