import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import CarouselBanner from '../../components/CarouselBanner';
import FilterHotel from '../../components/FilterHotel';
import ListHotel from '../../components/ListHotel';

function Hotel() {
    return (
        <Box>
            <CarouselBanner />
            <Container fixed sx={{ marginTop: '40px' }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <FilterHotel />
                    </Grid>
                    <Grid item xs={9}>
                        <ListHotel />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Hotel;