import { Card, CardContent, CardHeader, CardMedia, Chip, Divider, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import banner from '../../assets/banner.png'
import ChipConvenient from '../ChipConvenient';

function CardHotel() {
    return (
        <Card sx={{
            display: 'flex',
            height: '180px',
            '&:hover': {
                boxShadow: 'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px'
            }
        }}>
            <Box overflow='hidden' width='200px'>
                <CardMedia
                    component="img"
                    image={banner}
                    alt="Live from space album cover"
                    height='100%'
                />
            </Box>
            <CardContent sx={{ width: 'calc(100% - 232px)', position: 'relative' }}>
                <Stack direction="row" justifyContent='space-between' height='100%'  >
                    <Stack direction='column' justifyContent='space-between' width='calc(100% - 250px)' paddingRight='1rem'>
                        <Box>
                            <Typography variant='h6'>
                                Green Hotel & Apartment HN
                            </Typography>
                            <Box display='flex' alignItems='center'>
                                <Chip label="Khách sạn" sx={{ bgcolor: '#1976d2', color: '#fff' }} />
                                <Box marginTop='4px' marginLeft='4px'>
                                    <StarIcon sx={{ color: '#fdd835' }} />
                                    <StarIcon sx={{ color: '#fdd835' }} />
                                </Box>
                            </Box>
                            <Box marginTop='0.5rem' display='flex' alignItems='center'>
                                <LocationOnIcon sx={{ color: '#616161', fontSize: '16px' }} />
                                <Typography variant="body2" marginTop='2px' marginLeft='4px' color='#616161'>
                                    Địa chỉ
                                </Typography>
                            </Box>
                        </Box>
                        <Box>
                            <ChipConvenient />
                        </Box>
                    </Stack>
                    <Divider sx={{ position: 'absolute', top: 0, right: 'calc(250px + 0.5rem)' }} orientation="vertical" />
                    <Stack direction='column' justifyContent='space-between' width='250px' marginLeft='1rem'>
                        <Box display='flex' alignItems='center'>
                            <PersonIcon sx={{ color: '#4caf50' }} />
                            <Typography variant='body2' color='#4caf50' marginTop='4px'>
                                Ưu đãi thành viên
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='subtitle2' color='#1976d2'>
                                Thanh toán khi nhận phòng có card
                            </Typography>
                            <Typography variant='subtitle2' color='#757575' sx={{ textDecoration: 'line-through' }}>
                                1.000.000<span>&#8363;</span>
                            </Typography>
                            <Typography fontWeight='700' color='#d81b60'>
                                800.000<span>&#8363;</span>
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </CardContent>
        </Card >
    );
}

export default CardHotel;