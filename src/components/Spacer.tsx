import React, { FC } from 'react';
import { Box } from '@mui/material';

interface Props {
    children: React.ReactNode;
}

const Spacer: FC<Props> = ({ children }) => {
    return (
        <Box
            //   direction={`column`}
            //   spacing={3}
            sx={{
                m: `0px 50px`
            }}
        >
            {children}
        </Box>
    );
};

export default Spacer;
