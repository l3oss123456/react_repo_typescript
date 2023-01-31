import React, { FC, useState } from "react";
// import { Box, Button, Stack } from "@mui/material";
// import { CMDivider, SuccessBtn } from "./styled";
import { SeriesProps } from "../../Interfaces/SeriesProps";
import Form from "../../Components/Form";
import List from "../../Components/List";

interface Props {}

const Home: FC<Props> = () => {
  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([]);

  return (
    <div>
      <h1>My favorite tv series</h1>
      <Form seriesList={seriesList} setSeriesList={setSeriesList} />
      <List seriesList={seriesList} />
    </div>
  );

  // return (
  //   <Box>
  //     <Stack direction={`row`}>
  //       Home
  //       <Button variant="text">Text</Button>
  //       {/* <Button color="neutral" variant="contained">
  //         neutral
  //       </Button> */}
  //       <Button
  //         variant="contained"
  //         color={`secondary`}
  //         sx={
  //           {
  //             // m: 10,
  //             // "& .MuiButtonBase": {
  //             //   borderRadius: 200,
  //             // },
  //             // bgcolor: `grey.700`,
  //           }
  //         }
  //       >
  //         Contained
  //       </Button>
  //       <Button variant="outlined">Outlined</Button>
  //     </Stack>

  //     <CMDivider />

  //     <Stack direction={`row`} spacing={2}>
  //       <SuccessBtn>SuccessBtn1</SuccessBtn>
  //       <SuccessBtn>SuccessBtn2</SuccessBtn>
  //       <SuccessBtn>SuccessBtn3</SuccessBtn>
  //     </Stack>

  //     <h1>H1</h1>
  //     <h2>H2</h2>
  //     <h3>H3</h3>
  //     {/* <Typography variant="h1">H1</Typography>
  //     <Typography variant="h2">H2</Typography> */}
  //   </Box>
  // );
};

export default Home;
