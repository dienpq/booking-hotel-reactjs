import LocationOnIcon from '@mui/icons-material/LocationOn';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import WcIcon from '@mui/icons-material/Wc';
import SearchIcon from '@mui/icons-material/Search';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { Box, Button, FormControl, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs';
import { useState } from 'react';
import QuantityForm from '../QuantityForm';

function SearchHotel(props) {
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            position='absolute'
            top='400px'
            left='50%'
            width='800px'
            boxShadow='0 .5rem 1rem rgba(0,0,0,.15)'
            sx={{ background: '#fff', transform: 'translate(-50%, -50%)', borderRadius: '8px' }}
        >
            <Box display='flex' padding='1rem 2rem' bgcolor='#f5f5f5' color='#42a5f5' borderRadius='8px 8px 0 0'>
                <ManageSearchIcon />
                <Typography marginLeft='0.5rem'>
                    Khách sạn xem gần đây
                </Typography>
            </Box>

            <Grid container spacing={4} padding='2rem'>
                <Grid item xs={12}>
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        <TextField
                            id="outlined-start-adornment"
                            label="Thành phố, địa điểm hoặc tên khách sạn"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Thời gian nhận phòng"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            sx={{ width: '100%' }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={6}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Thời gian trả phòng"
                            value={value}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            sx={{ width: '100%' }}
                        />
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={8}>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Khách & Phòng"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">
                                <Diversity3Icon />
                            </InputAdornment>
                        }}
                        sx={{ width: '100%' }}
                    >
                        <Box padding='0.5rem 1rem'>
                            <Box display='flex' justifyContent='space-between' width='100%' alignItems='center' marginBottom='0.5rem'>
                                <Box display='flex'>
                                    <WcIcon />
                                    <Typography marginLeft='0.5rem'>Người lớn</Typography>
                                </Box>
                                <QuantityForm />
                            </Box>
                            <Box display='flex' justifyContent='space-between' width='100%' alignItems='center' marginBottom='0.5rem'>
                                <Box display='flex'>
                                    <EmojiPeopleIcon />
                                    <Typography marginLeft='0.5rem'>Trẻ em</Typography>
                                </Box>
                                <QuantityForm />
                            </Box>
                            <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
                                <Box display='flex'>
                                    <MeetingRoomIcon />
                                    <Typography marginLeft='0.5rem'>Phòng</Typography>
                                </Box>
                                <QuantityForm />
                            </Box>
                        </Box>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <Button variant='contained' sx={{ width: '100%', height: '100%' }}>
                        <SearchIcon />
                        <Typography>TÌm khách sạn</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SearchHotel;