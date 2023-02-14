import { Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/banner3.jpg';


function CarouselBanner() {
    var imgBanner = [
        {
            name: "Banner 1",
            path: banner1
        },
        {
            name: "Banner 2",
            path: banner2
        },
        {
            name: "Banner 3",
            path: banner3
        }
    ]
    return (
        <Carousel
            navButtonsProps={{
                style: {
                    borderRadius: 50
                }
            }}
            indicatorContainerProps={{
                style: {
                    display: 'none'
                }

            }}
        >
            {
                imgBanner.map((imgBannerItem, i) => <Box key={i} bgcolor='red' width='100%' height='500px' overflow='hidden'>
                    <img src={imgBannerItem.path} width='100%' alt='Banner Hotel' />
                </Box>)
            }
        </Carousel >
    );
}

export default CarouselBanner;