import { Box, Button, Container, Divider, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputAdornment, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import ApartmentIcon from '@mui/icons-material/Apartment';
import WifiIcon from '@mui/icons-material/Wifi';
import NoMealsIcon from '@mui/icons-material/NoMeals';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import banner2 from '../../assets/banner2.jpg';

function Booking(props) {
    const [countryCode, setCountryCode] = useState('+84');

    const handleChange = (event) => {
        setCountryCode(event.target.value);
    };

    return (
        <Container fixed>
            <Box paddingTop='2rem'>
                <Typography variant='h5' fontWeight='700'>Đặt phòng khách sạn</Typography>
                <Typography variant='subtitle1' fontWeight='700' color='#757575'>Điền thông tin người liên lạc và khách bên dưới</Typography>
            </Box>

            <Grid container spacing={2} marginTop='1rem'>
                <Grid item xs={8}>
                    <Typography variant='subtitle1' fontWeight='700' >Thông tin của bạn</Typography>
                    <Paper sx={{ marginTop: '2rem' }}>
                        <Grid container spacing={2} padding='0.5rem 1rem'>
                            <Grid item xs={12}>
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    <TextField
                                        label="Tên người liên hệ"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">
                                                <PersonIcon />
                                            </InputAdornment>
                                        }}
                                    />
                                    <FormHelperText>
                                        * Nhập tên như trên CMND/hộ chiếu (không dấu)
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={2}>
                                <FormControl sx={{ width: '100%' }}>
                                    <InputLabel id='country-code-lable'>Mã quốc gia</InputLabel>
                                    <Select
                                        labelId='country-code-lable'
                                        value={countryCode}
                                        onChange={handleChange}
                                        label='Mã quốc gia'
                                    >
                                        <MenuItem value='+84'>+84</MenuItem>
                                        <MenuItem value='+01'>+01</MenuItem>
                                        <MenuItem value='+02'>+02</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={5}>
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    <TextField
                                        label="Số di động"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">
                                                <PhoneIcon />
                                            </InputAdornment>
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={5}>
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    <TextField
                                        label="Email"
                                        placeholder='email@example.com'
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">
                                                <EmailIcon />
                                            </InputAdornment>
                                        }}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Box textAlign='center' marginTop='1rem' padding='0.5rem' bgcolor='#f5f5f5'>
                            <FormControl sx={{ width: '100%' }}>
                                <RadioGroup
                                    row
                                    defaultValue="0"
                                    name="radio-buttons-group"
                                    sx={{
                                        justifyContent: 'space-around'
                                    }}
                                >
                                    <FormControlLabel value="0" control={<Radio />} label="Tôi là khách cư trú" />
                                    <FormControlLabel value="1" control={<Radio />} label="Tôi đang đặt cho người khác" />
                                </RadioGroup>
                            </FormControl>
                        </Box>

                    </Paper>

                    <Box marginTop='2rem'>
                        <Typography variant='subtitle1' fontWeight='700'>Thông tin khách</Typography>

                        <Paper sx={{ marginTop: '1rem', padding: '1rem' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <FormControl variant="standard" sx={{ width: '100%' }}>
                                        <TextField
                                            label="Tên khách"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">
                                                    <PersonIcon />
                                                </InputAdornment>
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid item xs={2}>
                                    <FormControl sx={{ width: '100%' }}>
                                        <InputLabel id='country-code-lable'>Mã quốc gia</InputLabel>
                                        <Select
                                            labelId='country-code-lable'
                                            value={countryCode}
                                            onChange={handleChange}
                                            label='Mã quốc gia'
                                        >
                                            <MenuItem value='+84'>+84</MenuItem>
                                            <MenuItem value='+01'>+01</MenuItem>
                                            <MenuItem value='+02'>+02</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <FormControl variant="standard" sx={{ width: '100%' }}>
                                        <TextField
                                            label="Số di động"
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">
                                                    <PhoneIcon />
                                                </InputAdornment>
                                            }}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>

                    <Box marginTop='2rem'>
                        <Typography variant='subtitle1' fontWeight='700'>Chi tiết giá</Typography>
                        <Paper sx={{ padding: '1rem', marginTop: '1rem' }}>
                            <Stack direction='row' justifyContent='space-between'>
                                <Typography>(1x) Deluxe Double Room (1 đêm)</Typography>
                                <Typography>618.546  VND</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between' marginTop='1rem'>
                                <Typography>Thuế và phí</Typography>
                                <Typography>95.874  VND</Typography>
                            </Stack>
                            <Stack direction='row' justifyContent='space-between' marginTop='1rem'>
                                <Typography fontWeight='700'>Thành tiền</Typography>
                                <Typography fontWeight='700'>714.420 VND</Typography>
                            </Stack>
                        </Paper>
                    </Box>

                    <Stack direction='row' justifyContent='end' marginTop='1rem'>
                        <Button
                            variant='contained'
                            sx={{
                                bgcolor: '#d81b60',
                                '&:hover': {
                                    bgcolor: '#c2185b'
                                }
                            }}
                        >
                            Tiếp tục
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Stack direction='row' alignItems='center' padding='1rem'>
                            <ApartmentIcon />
                            <Box marginLeft='8px'>
                                <Typography variant='body1' fontWeight='700'>
                                    Hanoi Amore Hotel & Travel
                                </Typography>
                                <Typography variant='body2'>
                                    Hanoi Amore Hotel & Travel
                                </Typography>
                            </Box>
                        </Stack>
                        <Box padding='1rem' bgcolor='#f5f5f5'>
                            <Box>
                                <Typography component='span' variant='subtitle1' fontWeight='700' color='#424242'>- Thời gian nhận phòng:</Typography>
                                <Typography component='span'> Wed, 22 Feb 2023, Từ 14:00</Typography>
                            </Box>
                            <Box>
                                <Typography component='span' variant='subtitle1' fontWeight='700' color='#424242'>- Thời gian trả phòng:</Typography>
                                <Typography component='span'> Wed, 22 Feb 2023, Từ 14:00</Typography>
                            </Box>
                        </Box>
                        <Box padding='1rem'>
                            <Typography fontWeight='700'>(1x) Deluxe Double Room</Typography>
                            <Grid container spacing={1} marginTop='4px'>
                                <Grid item xs={5}>
                                    <Typography variant='subtitle2'>Khách / phòng</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant='subtitle2'>2 khách</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant='subtitle2'>Kiểu giường</Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant='subtitle2'>1 giường đôi</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Box component='img' src={banner2} width='100%' sx={{ objectFit: 'cover' }} />
                                </Grid>
                                <Grid item xs={7}>
                                    <Stack direction='row' alignItems='center' marginBottom='4px'>
                                        <NoMealsIcon fontSize='small' sx={{ color: '#757575', marginTop: '-2px' }} />
                                        <Typography variant='body2' color='#757575' marginLeft='4px'>
                                            Không bao gồm bữa sáng
                                        </Typography>
                                    </Stack>
                                    <Stack direction='row' alignItems='center'>
                                        <WifiIcon fontSize='small' sx={{ color: '#4caf50', marginTop: '-2px' }} />
                                        <Typography variant='body2' color='#4caf50' marginLeft='4px'>
                                            Wifi miễn phí
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                        <Divider />
                        <Box padding='1rem'>
                            <Stack direction='row' alignItems='center' marginBottom='4px'>
                                <AutoAwesomeIcon fontSize='small' sx={{ color: '#4caf50', marginTop: '-2px' }} />
                                <Typography variant='body2' color='#4caf50' marginLeft='4px'>
                                    Miễn phí hủy phòng
                                </Typography>
                            </Stack>
                            <Stack direction='row' alignItems='center'>
                                <CalendarMonthIcon fontSize='small' sx={{ color: '#4caf50', marginTop: '-2px' }} />
                                <Typography variant='body2' color='#4caf50' marginLeft='4px'>
                                    Có thể đổi lịch
                                </Typography>
                            </Stack>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container >
    );
}

export default Booking;