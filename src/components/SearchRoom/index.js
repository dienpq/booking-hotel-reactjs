import LocationOnIcon from '@mui/icons-material/LocationOn';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WcIcon from '@mui/icons-material/Wc';
import { Box, Button, FormControl, Grid, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs';
import { useState } from 'react';

function SearchRoom(props) {
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Box position='absolute' top='250px' left='50%' sx={{ background: '#fff', transform: 'translate(-50%, -50%)', padding: '2rem', borderRadius: '8px' }} width='600px'>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <FormControl variant="standard" sx={{ width: '100%' }}>
                        {/* <InputLabel htmlFor="input-with-icon-adornment">
                            Thành phố, địa điểm hoặc tên khách sạn
                        </InputLabel> */}
                        <TextField
                            id="outlined-start-adornment"
                            label="Thành phố, địa điểm hoặc tên khách sạn"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <LocationOnIcon />
                                </InputAdornment>
                            }

                            }
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
                        defaultValue="EUR"
                        sx={{ width: '100%' }}
                    >
                        <MenuItem>
                            <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
                                <Box display='flex'>
                                    <WcIcon />
                                    <Typography marginLeft='0.5rem'>Người lớn</Typography>
                                </Box>
                                <Box display='flex'>
                                    <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }}>
                                        <RemoveIcon fontSize='small' />
                                    </Button>
                                    <Box
                                        width='30.4px'
                                        height='30.4px'
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        border='1px solid rgba(25, 118, 210, 0.5)'
                                        color='#1976d2' borderRadius='4px'
                                        marginLeft='4px'
                                        marginRight='4px'
                                    >
                                        1
                                    </Box>

                                    <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }} disabled>
                                        <AddIcon fontSize='small' />
                                    </Button>
                                </Box>
                            </Box>
                        </MenuItem>
                        <MenuItem>
                            <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
                                <Box display='flex'>
                                    <EmojiPeopleIcon />
                                    <Typography marginLeft='0.5rem'>Trẻ em</Typography>
                                </Box>
                                <Box display='flex'>
                                    <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }}>
                                        <RemoveIcon fontSize='small' />
                                    </Button>
                                    <Box
                                        width='30.4px'
                                        height='30.4px'
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        border='1px solid rgba(25, 118, 210, 0.5)'
                                        color='#1976d2' borderRadius='4px'
                                        marginLeft='4px'
                                        marginRight='4px'
                                    >
                                        0
                                    </Box>

                                    <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }} disabled>
                                        <AddIcon fontSize='small' />
                                    </Button>
                                </Box>
                            </Box>
                        </MenuItem>
                        <MenuItem>
                            <Box display='flex' justifyContent='space-between' width='100%' alignItems='center'>
                                <Box display='flex'>
                                    <MeetingRoomIcon />
                                    <Typography marginLeft='0.5rem'>Phòng</Typography>
                                </Box>
                                <Box display='flex'>
                                    <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }}>
                                        <RemoveIcon fontSize='small' />
                                    </Button>
                                    <Box
                                        width='30.4px'
                                        height='30.4px'
                                        display='flex'
                                        justifyContent='center'
                                        alignItems='center'
                                        border='1px solid rgba(25, 118, 210, 0.5)'
                                        color='#1976d2' borderRadius='4px'
                                        marginLeft='4px'
                                        marginRight='4px'
                                    >
                                        2
                                    </Box>

                                    <Button variant='outlined' sx={{ width: '32px', height: '32px', minWidth: '20px', borderRadius: '4px' }}>
                                        <AddIcon fontSize='small' />
                                    </Button>
                                </Box>
                            </Box>
                        </MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={4}>
                    <Button variant='contained' sx={{ width: '100%', height: '100%' }}>TÌm khách sạn</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SearchRoom;