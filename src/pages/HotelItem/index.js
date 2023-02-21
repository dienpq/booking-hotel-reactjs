import { Box, Button, Container, Divider, Stack } from '@mui/material';
import InfoHotelItem from '../../components/InfoHotelItem';
import CardRoom from '../../components/CardRoom';
import EvaluateBlog from '../../components/EvaluateBlog';

function HotelItem(props) {
    return (
        <>
            <Container fixed>
                <Stack direction='row' justifyContent='space-between' paddingTop='1rem' alignItems='center'>
                    <Box>
                        Khách sạn / Việt Nam
                    </Box>

                    <Button variant='contained'>Thay đổi tìm kiếm</Button>
                </Stack>
                <Divider sx={{ margin: '1rem 0' }} />
                <InfoHotelItem />

                <Box marginTop='2rem'>
                    <Box children={<CardRoom />} marginTop='2rem' />
                    <Box children={<CardRoom />} marginTop='2rem' />
                </Box>
            </Container>

            <Box bgcolor='#f5f5f5' marginTop='2rem' paddingY='3rem'>
                <Container fixed>
                    <EvaluateBlog />
                </Container>
            </Box>
        </>
    );
}

export default HotelItem;