import { Box, Button, Container, Divider } from '@mui/material';
import { Stack } from '@mui/system';
import InfoHotelItem from '../../components/InfoHotelItem';

function HotelItem(props) {
    return (
        <Container fixed>
            <Stack direction='row' justifyContent='space-between' paddingTop='1rem' alignItems='center'>
                <Box>
                    Khách sạn / Việt Nam
                </Box>

                <Button variant='contained'>Thay đổi tìm kiếm</Button>
            </Stack>
            <Divider sx={{ margin: '1rem 0' }} />
            <InfoHotelItem />
        </Container>
    );
}

export default HotelItem;