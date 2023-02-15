import { Box, Button, Container, Divider, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import CarouselBanner from '../../components/CarouselBanner';
import FilterHotel from '../../components/FilterHotel';
import ListHotel from '../../components/ListHotel';
import TabFilter from '../../components/TabFilter';
import SearchBlog from '../../components/SearchBlog';
import SelectBlog from '../../components/SelectBlog';

function Hotel() {
    return (
        <Box>
            <CarouselBanner />
            <Container fixed sx={{ marginTop: '40px' }}>
                <Stack direction='row' justifyContent="space-between">
                    <Typography variant='h5'>Kết quả tìm kiếm của bạn ở gần Vincom Mega Mall Royal City</Typography>
                    <Button variant='contained'>Thay đổi</Button>
                </Stack>
                <Divider sx={{ margin: '2rem 0' }} />
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <FilterHotel />
                    </Grid>
                    <Grid item xs={9}>
                        <TabFilter />
                        <Grid container spacing={2} marginTop='0.5rem'>
                            <Grid item xs={8}>
                                <SearchBlog />
                            </Grid>
                            <Grid item xs={4}>
                                <SelectBlog />
                            </Grid>
                        </Grid>
                        <Divider sx={{ margin: '1rem 0' }} />
                        <ListHotel />
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}

export default Hotel;