import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '../../components/Card/Card'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSpacing(Number((event.target as HTMLInputElement).value));
    };

    const jsx = `
<Grid container spacing={${spacing}}>
`;

    return (
        <>
            <Box>
                <Box>
                    <Typography variant='h4'>Welcome</Typography>
                </Box>
                <Box>
                    <Typography><NavLink to='/profile'>Go to Profile</NavLink></Typography>
                </Box>
            </Box>
        </>
    );
}