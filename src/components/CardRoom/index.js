import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid, ImageList, ImageListItem, Stack, Typography } from '@mui/material';
import ChipConvenient from '../ChipConvenient';
import HouseIcon from '@mui/icons-material/House';
import HotelIcon from '@mui/icons-material/Hotel';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';
import WifiIcon from '@mui/icons-material/Wifi';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import HelpIcon from '@mui/icons-material/Help';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import srcset from '../../common';
import { Link } from 'react-router-dom';

function CardRoom(props) {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 3,
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
        <Card>
            <CardHeader title='Deluxe Double' />

            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card>
                            <ImageList
                                variant="quilted"
                                cols={3}
                                rowHeight={60}
                                sx={{ margin: 0 }}
                            >
                                {itemData.slice(0, 4).map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...srcset(item.img, 300, item.rows, item.cols)}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            <Stack direction='row' justifyContent='space-between' alignItems='end'>
                                <CardContent>
                                    <Stack direction='row' marginBottom='0.5rem'>
                                        <HouseIcon />
                                        <Typography variant='subtitle1' marginLeft='4px'>
                                            20.2 m2
                                        </Typography>
                                    </Stack>
                                    <ChipConvenient />
                                </CardContent>

                                <CardActions sx={{ padding: '1rem' }}>
                                    <Button sx={{ bgcolor: '#f5f5f5' }}>
                                        Xem phòng
                                    </Button>
                                </CardActions>
                            </Stack>
                        </Card>
                    </Grid>
                    <Grid item xs={8} height='100%'>
                        <Card>
                            <CardContent>
                                <Box>
                                    <Typography variant='h6'>
                                        Deluxe Double Room
                                    </Typography>
                                    <Grid container spacing={1} marginTop='0'>
                                        <Grid item xs={4}>
                                            <Stack direction='row'>
                                                <HotelIcon fontSize='small' />
                                                <Typography variant='subtitle2' marginLeft='4px'>
                                                    1 Giường đôi
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Stack direction='row'>
                                                <SupervisorAccountIcon fontSize='small' />
                                                <Typography variant='subtitle2' marginLeft='4px'>
                                                    2 Khách
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Typography variant='subtitle2' textAlign='right' color='#f44336'>
                                                (2 phòng trống)
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                    <Divider sx={{ marginY: '1rem' }} />

                                    <Grid container>
                                        <Grid item xs={8}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={6}>
                                                    <Stack direction='row'>
                                                        <NoMealsIcon fontSize='small' sx={{ color: '#757575' }} />
                                                        <Typography variant='body2' color='#757575' marginLeft='4px' marginTop='2px'>
                                                            Không bao gồm bữa sáng
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Stack direction='row'>
                                                        <NoMeetingRoomIcon fontSize='small' sx={{ color: '#757575' }} />
                                                        <Typography variant='body2' color='#757575' marginLeft='4px' marginTop='2px'>
                                                            Hủy phòng không mất phí
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Stack direction='row'>
                                                        <WifiIcon fontSize='small' sx={{ color: '#4caf50' }} />
                                                        <Typography variant='body2' color='#4caf50' marginLeft='4px' marginTop='2px'>
                                                            Wifi miễn phí
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Stack direction='row'>
                                                        <NoMeetingRoomIcon fontSize='small' sx={{ color: '#757575' }} />
                                                        <Typography variant='body2' color='#757575' marginLeft='4px' marginTop='2px'>
                                                            Không đổi lịch
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Stack direction='row'>
                                                        <SmokeFreeIcon fontSize='small' sx={{ color: '#4caf50' }} />
                                                        <Typography variant='body2' color='#4caf50' marginLeft='4px' marginTop='2px'>
                                                            Không hút thuốc
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <Stack direction='row'>
                                                        <HelpIcon fontSize='small' sx={{ color: '#2196f3' }} />
                                                        <Typography variant='body2' color='#2196f3' marginLeft='4px' marginTop='2px'>
                                                            Xem Chính sách hủy phòng
                                                        </Typography>
                                                    </Stack>
                                                </Grid>
                                            </Grid>

                                            <Stack direction='row' alignItems='center' marginTop='1.5rem'>
                                                <CardGiftcardIcon fontSize='small' sx={{ color: '#2196f3' }} />
                                                <Typography variant='body2' color='#2196f3' marginLeft='8px' marginTop='2px'>
                                                    Thanh toán khi nhận phòng <br></br>
                                                    Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng!
                                                </Typography>
                                            </Stack>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Stack direction='column' alignItems='end' justifyContent='space-between' height='100%'>
                                                <Box textAlign='right'>
                                                    <Typography variant='body1' color='#757575' sx={{ textDecoration: 'line-through' }}>
                                                        1.000.000<span>&#8363;</span>
                                                    </Typography>
                                                    <Typography variant='h5' fontWeight='700' color='#d81b60'>
                                                        800.000<span>&#8363;</span>
                                                    </Typography>
                                                    <Typography variant='caption' color='#757575'>
                                                        / phòng / đêm
                                                    </Typography>
                                                </Box>

                                                <Link
                                                    className='text-decoration-none'
                                                    to='/hotel/1/room/1/booking'
                                                    children={
                                                        <Button
                                                            variant='contained'
                                                            sx={{
                                                                bgcolor: '#d81b60',
                                                                '&:hover': {
                                                                    bgcolor: '#c2185b'
                                                                },
                                                            }}
                                                        >
                                                            Đặt ngay
                                                        </Button>
                                                    }
                                                >
                                                </Link>

                                            </Stack>
                                        </Grid>
                                    </Grid>

                                    <Divider sx={{ marginY: '1rem' }} />
                                    <Stack direction='row'>
                                        <PersonIcon sx={{ color: '#4caf50' }} />
                                        <Typography variant='body2' color='#4caf50' marginTop='4px' marginLeft='4px'>
                                            Cám ơn bạn đã đăng nhập! Tận hưởng ngay mức giá đặc biệt nhé!
                                        </Typography>
                                    </Stack>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    );
}

export default CardRoom;