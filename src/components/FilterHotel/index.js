import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, Link, OutlinedInput, Paper, Radio, RadioGroup, Slider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function FilterHotel(props) {
    const [value, setValue] = React.useState([0, 24000000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={3}>
            <Paper elevation='2'>
                <Typography padding='1rem' fontWeight='600'>
                    Sắp xếp kết quả
                    <Typography fontSize='12px'>Sắp xếp kết quả theo lựa chọn</Typography>
                </Typography>
                <Divider />
                <Box padding='1rem'>
                    <FormControl>
                        <RadioGroup
                            aria-labelledby="radio-buttons-group-label"
                            defaultValue="nearest"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="highest" control={<Radio size="small" />} label="Giá cao nhất" />
                            <FormControlLabel value="lowest" control={<Radio size="small" />} label="Giá thấp nhất" />
                            <FormControlLabel value="evaluation" control={<Radio size="small" />} label="Điểm đánh giá" />
                            <FormControlLabel value="popularity" control={<Radio size="small" />} label="Độ phổ biến" />
                            <FormControlLabel value="nearest" control={<Radio size="small" />} label="Gần nhất" />
                        </RadioGroup>
                    </FormControl>
                </Box>
            </Paper>
            <Paper elevation='2'>
                <Box padding='1rem' display='flex' justifyContent='space-between' position='relative'>
                    <Typography fontWeight='600'>
                        Lọc kết quả
                        <Typography fontSize='12px'>Hiển thị kết quả phân loại theo:</Typography>
                    </Typography>
                    <Link underline='none' fontSize='14px' fontWeight={600} sx={{ cursor: 'pointer', position: 'absolute', top: '1rem', right: '1rem' }}>Đặt lại bộ lọc</Link>
                </Box>

                <Divider />
                <Box padding='0.5rem 0'>
                    <Accordion elevation={0} expanded disableGutters={true} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight='600'>Chính sách đặt phòng</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 1rem 1rem 1rem' }}>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Miến phí hủy phòng" />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />
                    <Accordion
                        elevation={0}
                        disableGutters={true}
                        expanded
                        sx={{
                            '&:before': {
                                display: 'none',
                            }
                        }}
                    >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight='600'>Khoảng giá mỗi đêm</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 1rem 1rem 1rem' }}>
                            <Box display='flex' justifyContent='space-between' position='relative'>
                                <FormControl>
                                    <OutlinedInput value='0' sx={{ width: '110px', height: '40px', borderRadius: '2rem' }} />
                                </FormControl>
                                <Divider
                                    sx={{
                                        width: '24px',
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        borderColor: 'rgba(0, 0, 0, 0.87)',
                                    }}
                                />
                                <FormControl>
                                    <OutlinedInput value='24000000' sx={{ width: '110px', height: '40px', borderRadius: '2rem' }} />
                                </FormControl>
                            </Box>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                max={24000000}
                                step={10000}
                                sx={{ marginTop: '1rem' }}
                            />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0} expanded disableGutters={true} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight='600'>Hạng sao</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 1rem 1rem 1rem' }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked size="small" />}
                                    label={<Box marginTop='4px'>
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                    </Box>}
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked size="small" />}
                                    label={<Box marginTop='4px'>
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                    </Box>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked size="small" />}
                                    label={<Box marginTop='4px'>
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                    </Box>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked size="small" />}
                                    label={<Box marginTop='4px'>
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                    </Box>
                                    }
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked size="small" />}
                                    label={<Box marginTop='4px'>
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                        <StarIcon sx={{ color: '#fdd835' }} />
                                    </Box>
                                    }
                                />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0} expanded disableGutters={true} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight='600'>Tiện nghi</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 1rem 1rem 1rem' }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label='Wifi'
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label='Để xe'
                                />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0} expanded disableGutters={true} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight='600'>Ưu tiên nơi nghỉ</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 1rem 1rem 1rem' }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox defaultChecked size="small" />}
                                    label='All'
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label='Vip'
                                />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion elevation={0} expanded disableGutters={true} >
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography fontWeight='600'>Loại hình lưu trú</Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ padding: '0 1rem 1rem 1rem' }}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label='Nhà riêng'
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox size="small" />}
                                    label='Biệt thự'
                                />
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Paper>
        </Stack >
    );
}

export default FilterHotel;