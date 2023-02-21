import { Box, Grid, LinearProgress, Rating, Stack, styled, Typography } from '@mui/material';
import { linearProgressClasses } from '@mui/material/LinearProgress';
import React from 'react';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

function EvaluateBlog(props) {
    return (
        <>
            <Grid container height='250px'>
                <Grid item xs={3}>
                    <Stack direction='column' justifyContent='space-between' height='100%' alignItems='center'>
                        <Typography fontWeight='500'>
                            Dựa trên <Typography component='span' fontWeight='700'>16</Typography> đánh giá
                        </Typography>
                        <Box
                            height='120px'
                            width='120px'
                            bgcolor='#00b0ff'
                            borderRadius='50%'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            position='relative'
                            border='10px solid #fff'
                            sx={{ outline: '10px solid #0091ea' }}
                        >
                            <Typography fontSize='32px' color='#f5f5f5' fontWeight='700'>
                                8.5
                            </Typography>
                        </Box>
                        <Typography fontSize='28px' fontWeight='700' color='#00b0ff'>Ấn tượng</Typography>
                    </Stack>
                </Grid>

                <Grid item xs={5}>
                    <Stack direction='row' alignItems='center' height='100%'>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography>Tuyệt vời</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Box width='100%'>
                                        <BorderLinearProgress variant="determinate" value={50} />
                                    </Box>
                                    <Box marginLeft='1rem'>
                                        <Typography component='span' >7</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Rất tốt</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Box width='100%'>
                                        <BorderLinearProgress variant="determinate" value={50} />
                                    </Box>
                                    <Box marginLeft='1rem'>
                                        <Typography component='span' >7</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Hài lòng</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Box width='100%'>
                                        <BorderLinearProgress variant="determinate" value={50} />
                                    </Box>
                                    <Box marginLeft='1rem'>
                                        <Typography component='span' >7</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Trung bình</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Box width='100%'>
                                        <BorderLinearProgress variant="determinate" value={50} />
                                    </Box>
                                    <Box marginLeft='1rem'>
                                        <Typography component='span' >7</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Kém</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Box width='100%'>
                                        <BorderLinearProgress variant="determinate" value={50} />
                                    </Box>
                                    <Box marginLeft='1rem'>
                                        <Typography component='span' >7</Typography>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>

                <Grid item xs={4}>
                    <Stack direction='row' alignItems='center' height='100%'>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <Typography>Sạch sẽ</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Rating defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Thoải mái</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Rating defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Đồ ăn</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Rating defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Vị trí</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Rating defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                            </Grid>
                            <Grid item xs={3}>
                                <Typography>Dịch vụ</Typography>
                            </Grid>
                            <Grid item xs={8}>
                                <Stack direction='row' alignItems='center'>
                                    <Rating defaultValue={4.5} precision={0.5} readOnly />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}

export default EvaluateBlog;