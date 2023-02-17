import { Box } from '@mui/system';
import React from 'react';
import Banner from '../../assets/banner.png';
import SearchHotel from '../../components/SearchHotel';

function Home() {
    return (
        <Box position='relative'>
            <Box
                component='img'
                src={Banner}
                sx={{ objectFit: 'cover' }}
                width='100%'
                height='450px'
            />
            <SearchHotel />
        </Box>
    );
}

export default Home;