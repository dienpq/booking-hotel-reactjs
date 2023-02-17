import { Chip, Divider, ImageList, ImageListItem, Paper, Typography, Box, Button, CardActionArea, CardContent, Card, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Stack } from '@mui/system';
import AirConditionerIcon from '../../assets/icon-air-conditioner.png';
import ElevatorIcon from '../../assets/icon-elevator.png';
import WifiIcon from '../../assets/icon-wifi.png';
import ReceptionistIcon from '../../assets/icon-receptionist.png';
import SwiperComment from '../SwiperComment';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function InfoHotelItem(props) {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 4,
            cols: 3
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        }
    ];

    return (
        <Paper sx={{ marginTop: '1rem' }}>
            <Stack direction='row' justifyContent='space-between' padding='1rem 1rem 0 1rem'>
                <Box>
                    <Typography variant='h5' fontWeight='700'>
                        Hanoi Amore Hotel & Travel
                    </Typography>
                    <Typography variant='body1' fontWeight='600' color='#616161'>
                        Hanoi Amore Hotel & Travel
                    </Typography>
                    <Box display='flex' alignItems='center' marginTop='0.5rem'>
                        <Chip label="Khách sạn" sx={{ bgcolor: '#1976d2', color: '#fff' }} />
                        <Box marginTop='4px' marginLeft='4px'>
                            <StarIcon sx={{ color: '#fdd835' }} />
                            <StarIcon sx={{ color: '#fdd835' }} />
                        </Box>
                    </Box>
                    <Box marginTop='0.5rem' display='flex' alignItems='center'>
                        <LocationOnIcon sx={{ color: '#616161', fontSize: '16px' }} />
                        <Typography variant="body2" marginTop='2px' marginLeft='4px' color='#616161'>
                            105 Vũ Tông Phan, phương Khương Trung, Thanh Xuân, Hà Nội, Việt Nam, 100000
                        </Typography>
                    </Box>
                </Box>
                <Stack textAlign='right' direction='column' justifyContent='end'>
                    <Typography variant='subtitle2' fontWeight='600'>
                        Giá phòng mỗi đêm
                    </Typography>
                    <Typography variant='h4' fontWeight='700' color='#d81b60'>
                        714.025 <span>&#8363;</span>
                    </Typography>
                    <Button
                        variant='contained'
                        sx={{
                            width: '250px',
                            bgcolor: '#d81b60',
                            '&:hover': {
                                bgcolor: '#c2185b'
                            }
                        }}
                    >Đặt phòng</Button>
                </Stack>
            </Stack>

            <Divider sx={{ padding: '0.5rem 0' }} />

            <Box position='relative' padding='0 1rem'>
                <ImageList
                    variant="quilted"
                    cols={4}
                    rowHeight={121}
                >
                    {itemData.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 300, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <Box marginTop='2rem' textAlign='center' bgcolor='#fafafa' padding='1rem'>
                <Typography variant='h5' fontWeight='700' marginBottom='2rem'>
                    Xem đánh giá hữu ích
                </Typography>

                <SwiperComment />

                <Button variant='contained' sx={{ marginY: '1rem', width: '230px' }}>Xem tất cả đánh giá</Button>
            </Box>
            <Box marginTop='2rem' textAlign='center' padding='0 1rem 2rem 1rem'>
                <Typography variant='h5' fontWeight='700' textAlign='center'>
                    Tiện nghi khách sạn
                </Typography>
                <Stack direction='row' justifyContent='center' spacing={6} marginTop='2rem'>
                    <Box textAlign='center'>
                        <Box
                            component='img'
                            src={AirConditionerIcon}
                            width='40px'
                            height='40px'
                        />
                        <Typography>
                            Máy lạnh
                        </Typography>
                    </Box>
                    <Box textAlign='center'>
                        <Box
                            component='img'
                            src={ReceptionistIcon}
                            width='40px'
                            height='40px'
                        />
                        <Typography>
                            Lễ tân 24h
                        </Typography>
                    </Box>
                    <Box textAlign='center'>
                        <Box
                            component='img'
                            src={ElevatorIcon}
                            width='40px'
                            height='40px'
                        />
                        <Typography>
                            Máy lạnh
                        </Typography>
                    </Box>
                    <Box textAlign='center'>
                        <Box
                            component='img'
                            src={WifiIcon}
                            width='40px'
                            height='40px'
                        />
                        <Typography>
                            Máy lạnh
                        </Typography>
                    </Box>
                </Stack>
                <Button variant='contained' sx={{ marginTop: '2rem', width: '230px' }}>Xem tất cả tiện nghi</Button>
            </Box>
        </Paper >
    );
}

export default InfoHotelItem;
