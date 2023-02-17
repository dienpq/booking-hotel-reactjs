import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Paper, Stack, Typography } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

function SwiperComment(props) {
    const listCommentUseful = [
        {
            name: 'Phan Dien',
            description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
        },
        {
            name: 'Phan Dien',
            description: 'efg'
        },
        {
            name: 'Phan Dien',
            description: 'xyz'
        },
        {
            name: 'Phan Dien',
            description: '123'
        },
        {
            name: 'Phan Dien',
            description: '456'
        }
    ];

    return (
        <Box position='relative' maxWidth='850px' margin='1rem auto'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="customSwiper"
            >
                {
                    listCommentUseful.map((comment, i) =>
                        <SwiperSlide>
                            <Paper
                                elevation='4'
                                sx={{
                                    textAlign: 'left',
                                    height: '100%',
                                }}
                            >
                                <Stack direction='column' justifyContent='space-between' height='100%'>
                                    <Box padding='1.5rem 1.5rem 0 1.5rem'>
                                        <Typography
                                            variant="body2"
                                            className='text-ellipsis-3'
                                        >
                                            {comment.description}
                                        </Typography>
                                    </Box>
                                    <Box padding='0 1.5rem 1rem 1.5rem' display='flex' alignItems='center'>
                                        <PersonIcon />
                                        <Typography marginTop='4px'>
                                            {comment.name}
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Paper>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </Box>

    );
}

export default SwiperComment;