import { Box } from '@mui/system';
import React from 'react';
import Banner from '../../assets/banner.png';
import SearchHotel from '../../components/SearchHotel';
import styles from './Home.module.scss';

function Home() {
    return (
        <Box position='relative'>
            <div className={styles.boxBanner}>
                <img src={Banner} className={styles.banner} alt='Banner Home' />
            </div>
            <SearchHotel />
        </Box>
    );
}

export default Home;