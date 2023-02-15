import { Box, Link } from '@mui/material';
import React from 'react';
import CardHotel from '../CardHotel'

function ListHotel() {
    return (
        <Box marginTop='2rem'>
            <Link display='block' underline='none' href='#' marginBottom='1rem' >
                <CardHotel />
            </Link>
            <Link display='block' underline='none' href='#'>
                <CardHotel />
            </Link>
        </Box >
    );
}

export default ListHotel;