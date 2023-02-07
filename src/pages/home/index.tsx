import React, { FC, useState } from "react"
import { Box, Button, Stack } from "@mui/material"
import { CMDivider, SuccessBtn, TestBtn } from "./styled"
import { SeriesProps } from "../../interfaces/SeriesProps"
import Form from "../../components/Form"
import List from "../../components/List"
import Spacer from "../../components/Spacer"

interface Props {}

const Home: FC<Props> = () => {
    const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([])

    return (
        <Spacer>
            <h1>My favorite tv series</h1>
            <Form seriesList={seriesList} setSeriesList={setSeriesList} />
            <List seriesList={seriesList} />

            <Box>
                <Stack direction={`row`}>
                    Home
                    <Button variant="text">Text</Button>
                    {/* <Button color="neutral" variant="contained">
          neutral
        </Button> */}
                    <Button
                        variant="contained"
                        color={`secondary`}
                        sx={
                            {
                                // m: 10,
                                // "& .MuiButtonBase": {
                                //   borderRadius: 200,
                                // },
                                // bgcolor: `grey.700`,
                            }
                        }
                    >
                        Contained
                    </Button>
                    <Button variant="outlined">Outlined</Button>
                </Stack>
                <CMDivider />
                <Stack direction={`row`} spacing={2}>
                    <SuccessBtn>SuccessBtn1</SuccessBtn>
                    <SuccessBtn>SuccessBtn2</SuccessBtn>
                    <SuccessBtn>SuccessBtn3</SuccessBtn>
                    <TestBtn bgcolor={`red`} fontcolor={`white`}>
                        TestBtn
                    </TestBtn>
                </Stack>
                <h1>H1</h1>
                <h2>H2</h2>
                <h3>H3</h3>

                {/* <Typography variant="h1">H1</Typography>
      <Typography variant="h2">H2</Typography> */}
            </Box>
        </Spacer>
    )
}

export default Home
