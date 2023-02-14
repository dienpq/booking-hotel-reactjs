import { Box } from '@mui/system';
import React from 'react';
import Banner from '../../assets/banner.png';
import SearchRoom from '../../components/SearchRoom';
import styles from './Home.module.scss';

function Home() {
    return (
        <Box position='relative'>
            <div className={styles.boxBanner}>
                <img src={Banner} className={styles.banner} alt='Banner Home' />
            </div>
            <SearchRoom />
        </Box>
    );
}

export default Home;